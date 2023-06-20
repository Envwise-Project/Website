import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "./assets/arrow.svg";
import chatGPT from "./assets/chatGPT.svg";
import newChat from "./assets/newChat.svg";
import pencil from "./assets/pencil.svg";
import ping from "./assets/ping.svg";
import attachmen from "./assets/attachmen.svg";
import ChatGreenIcon from "./assets/chatGreenIcon.svg";
import sparkles from "./assets/sparkles.svg";
import axios from "axios";
import css from "./Chatbot.module.css";
import SmallLoading from "./Small_Loading/Small__Loading.jsx";
import { baseMessage } from "./baseMessage";

const AskMe = () => {
  const [location, setLocation] = useState({ country_name: "my location" });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const currLocation = await axios.get("https://ipapi.co/json");
    setLocation(currLocation.data);
  };

  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_GPT_KEY;
  const url = "https://api.openai.com/v1/chat/completions";
  const [messages, setMessages] = useState([]);
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRedirect = () => {
    navigate("/marketplace");
  };
  const expectedKeywords = [];

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.elements.messageInput;
    const message = input.value.trim();

    if (message) {
      const containsKeyword = expectedKeywords.some((keyword) =>
        message.toLowerCase().includes(keyword.toLowerCase())
      );

      if (!containsKeyword) {
        const newMessage = {
          text: message,
          timestamp: new Date().toLocaleString(),
          sender: "user",
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setIsLoading(true);
        try {
          const response = await axios.post(
            url,
            {
              messages: [
                {
                  role: "system",
                  content: baseMessage,
                },
                { role: "user", content: message },
              ],
              model: "gpt-3.5-turbo",
              max_tokens: 100,
            },
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
              },
            }
          );

          const data = response.data;
          const aiResponse = {
            text: data.choices[0].message.content,
            timestamp: new Date().toLocaleString(),
            sender: "ai",
          };
          setMessages((prevMessages) => [...prevMessages, aiResponse]);
          setAiResponse(data.choices[0].message.content);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      } else {
        const invalidResponse = {
          text: "I'm sorry! I'm focused on discussing green initiatives. Why don't you ask me about Net Zero Emission buildings? You can try adding keywords like income, investment property, environmental impact, green buildings, property tokenization system, sustainability, renewable energy, carbon footprint, and others.",

          timestamp: new Date().toLocaleString(),
          sender: "system",
        };
        setMessages((prevMessages) => [...prevMessages, invalidResponse]);
      }

      input.value = "";
    }
  };

  const handleNewDialogClick = () => {
    setMessages([]);
    setAiResponse("");
  };

  const handleBtn = async (text) => {
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    setIsLoading(true);
    try {
      const response = await axios.post(
        apiUrl,
        {
          messages: [{ role: "user", content: baseMessage + " " + text }],
          model: "gpt-3.5-turbo",
          max_tokens: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      let message = response.data.choices[0].message.content;
      const newMessage = {
        text: message,
        timestamp: new Date().toLocaleString(),
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.chatbot__container}>
      {isLoading && <SmallLoading />}
      <div className={css.chatbot}>
        <h2>AskMe</h2>
        {messages.map((message, index) => (
          <div key={index} className={css.chatbot__output}>
            <div className={css.question}>
              <span>
                <img src={ChatGreenIcon} alt="Green icon" />
                {message.timestamp}
              </span>
              <p>{message.text}</p>
            </div>
            {aiResponse.sender === "user" && (
              <div className={css.answer}>
                <div>
                  <img src={chatGPT} alt="chatGPT" />
                  <span className="timestamp">{message.timestamp}</span>
                </div>
                <p>{aiResponse}</p>
              </div>
            )}
          </div>
        ))}

        <div className={css.chatbot__inputContainer}>
          <button
            onClick={handleNewDialogClick}
            className={css.chatbot__cleanBtn}
          >
            <img src={newChat} alt="newChat" />
            <p>New dialog</p>
          </button>
          <form onSubmit={handleMessageSubmit} className={css.chatbot__form}>
            <img src={attachmen} alt="attachmen" />
            <input
              type="text"
              name="messageInput"
              placeholder="Send me a message"
            />
            <button type="submit">
              <img src={arrow} alt="arrow" />
            </button>
          </form>
        </div>
      </div>
      <div className={css.chatbot__recommendations}>
        <h2>Recommendations</h2>
        <div className={css.recommendations__body}>
          <h3>
            Welcome to <span> Green AI</span>. Try some of the examples below to help you
            reduce your carbon footprint and make the world a better place.
          </h3>

          <div className={css.buttonsContainer}>
            <div className={css.button__row}>
              <div
                onClick={() =>
                  handleBtn(
                    `Short and Easy response - Where can I apply for carbon reduction grants in ${location.country_name}?`
                  )
                }
              >
                <i>
                  <img src={sparkles} alt="Sparkles" />
                </i>
                <h4>Green Grants</h4>
                <p>
                  Where can I apply for carbon reduction grants in{" "}
                  {location.country_name}?
                </p>
              </div>
              <div
                onClick={() =>
                  handleBtn(
                    "Easy response - Give me a roadmap for me to create a Net Zero Emission building"
                  )
                }
              >
                <i>
                  <img src={sparkles} alt="Sparkles" />
                </i>
                <h4>Green Journey</h4>
                <p>
                  Create a roadmap for me to create a Net Zero Emission building
                </p>
              </div>
            </div>

            <div className={css.button__row}>
              <div onClick={handleRedirect}>
                <i>
                  <img src={sparkles} alt="Sparkles" />
                </i>
                <h4>Green Funding</h4>
                <p>Go to marketplace</p>
              </div>
              <div
                onClick={() =>
                  handleBtn(
                    " Short and Easy response - Can you recommend some good sources to provide information on zero net emission buildings"
                  )
                }
              >
                <i>
                  <img src={sparkles} alt="Sparkles" />
                </i>
                <h4>Green Support</h4>
                <p>
                  Can you recommend some good sources to provide information on
                  zero net emission buildings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskMe;
