import React, { useState } from "react";
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

const AskMe = () => {
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
                  content:
                    "You are a helpful assistant.What is Envwise? Envwise is a green-tech platform that creates a smarter pathway to greener properties. Our vision is to create a future of zero-emission buildings. Paving the way to create a world of zero-emission buildings by enabling the emission calculation, controls, its associated grants, incentives, and green funding to unlock the potential for greener living. We want our community (Econeers) to ethically earn when they contribute to the Envwise fractionalized zero-emission property portfolio. Why use Envwise? Net-zero emissions are crucial to avoid catastrophic effects to our climate. Due to its high energy consumption and greenhouse gas emissions, the built environment has a significant impact. Envwise can help. Our pioneering AI-fueled platform seamlessly bridges the gap between environmental sustainability and financial benefits. 1. Buildings are a major climate pollutant (39% of all emissions). 2. Its complex - applying for grants and investing in property. 3. They transcend every economic and social sector of humanity impacting health and well-being. 4. Sustainable buildings have lower operating costs and higher value. What is property tokenisation? The ENVWISE platform enables everyone to be part of our success by investing in our green property fund which allows the property owners to get funding towards sustainability and in return pay a small passive income to the investors. 1. Token Launch: Envwise is offering property owners an opportunity to secure funding for sustainable investments through property tokenization geared by F-NFT. 2. Platform Integration: Property owners have the opportunity to raise green funding by tokenizing their property by creating its F-NFT. The benefit behind F-NFT is the ownership of the property do not change. 3. Strategic Partnerships: ENVWISE will forge strategic alliances and collaborations to broaden the reach of our property tokenization funding scheme across industries. How can you help me? The ENVWISE AI engine customizes a roadmap to create zero-emission buildings for households and businesses by: 1. Grants & Funding: ENVWISE's state-of-the-art AI empowers the community with knowledge and streamlines the acquisition of grants and funding for green projects. It is now effortless for individuals and organizations to obtain financial incentives for sustainable projects. 2. Net-Zero Learning and Development: ENVWISE's comprehensive education platform focuses on net-zero emissions and sustainable practices, delivering interactive training modules, workshops, and best practices to individuals and businesses striving for a greener future. 3. Eco Marketplace: ENVWISE cultivates a vibrant ecosystem of eco-conscious econeers and businesses by connecting them to a curated selection of environmentally friendly products and services.",
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
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };

    setIsLoading(true);
    try {
      const response = await axios.post(
        apiUrl,
        {
          messages: [{ role: "user", content: text }],
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
            Welcome to Green AI. Try some of the examples below to help you
            reduce your carbon footprint and make the world a better place.
          </h3>

          <div className={css.buttonsContainer}>
            <div className={css.button__row}>
              <div
                onClick={() =>
                  handleBtn(
                    "short and easy response - Where can I apply for carbon reduction grants in UK?"
                  )
                }
              >
                <i>
                  <img src={sparkles} alt="Sparkles" />
                </i>
                <h4>Green Grants</h4>
                <p>
                  Where can I apply for carbon reduction grants in my local
                  area?
                </p>
              </div>
              <div
                onClick={() =>
                  handleBtn(
                    "Short and Easy response - Create a roadmap for me to create a Net Zero Emission building"
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
                    " Easy response - Can you recommend some good sources to provide information on zero net emission buildings"
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
