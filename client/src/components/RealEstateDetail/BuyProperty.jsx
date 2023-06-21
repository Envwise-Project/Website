import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import db from "../RealEstates/fakedb/db.json";
import BankTransfer from "./BankTransfer";
import CreditCard from "./CreditCard";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";

const BuyProperty = () => {
  const { number } = useParams();
  const land = db.find((item) => item.number === number);

  const [rangeValue, setRangeValue] = useState(40);
  const [paymentMethod, setPaymentMethod] = useState("");
  // const [isConnected, setIsConnected] = useState(false);

  const navigate = useNavigate();
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    const redirectUri = `${window.location.origin}/marketplace/`;
    loginWithRedirect({
      redirectUri: redirectUri,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        handleLogin();
      }
    }
  }, [navigate, isAuthenticated, isLoading]);

  useEffect(() => {
    if (paymentMethod === "bank-transfer") {
      window.my_modal_3.showModal();
    }
    if (paymentMethod === "credit-card") {
      window.my_modal_4.showModal();
    }
    if (paymentMethod === "metamask") {
      // Verificar si el método de pago es "Metamask" y no está conectado
      window.my_modal_5.showModal();
    }
  }, [paymentMethod]);

  // useEffect(() => {
  //   setIsConnected(active); // Establecer el estado isConnected según el estado de la conexión a MetaMask
  // }, [active]);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const priceNFT = parseInt(land.NFTPrice);
  const totalPrice = rangeValue * priceNFT;
  const availables = land.AvailablesNFT;

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  // const handleConnectWallet = () => {
  //   setIsConnected(true);
  // };

  return !isLoading && isAuthenticated ? (
    <div className="hero min-h-screen bg-base-200 mt-16 pb-24">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold mt-10">
            {land.address} | {land.location}
          </h1>
          {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}

          <div className="w-96 mt-5 ml-52">
            {/* -----------------------------QUANTITY---------------------------------- */}
            <p className="text-left mb-2">Property token quantity: </p>
            <input
              type="range"
              min="0"
              max={availables}
              value={rangeValue}
              className="range w-96"
              onChange={handleRangeChange}
            />
            <p>
              Buy <span className="font-extrabold">{rangeValue} </span> NFT at $
              {priceNFT} per NFT
            </p>

            {/* -----------------------------PAYMENT METHOD---------------------------------- */}
            <p className="mt-8 text-left mb-2">Payment Method: </p>
            <select
              className="select select-primary w-full max-w-x"
              onChange={handlePaymentMethodChange}
            >
              <option value="chose">Select payment method</option>
              <option value="metamask">Metamask</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="credit-card">Credit Card</option>
            </select>

            {paymentMethod === "bank-transfer" && (
              <>
                <dialog id="my_modal_3" className="modal">
                  <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle absolute right-2 top-2">
                      ✕
                    </button>
                    <BankTransfer />
                  </form>
                </dialog>
              </>
            )}
            {paymentMethod === "credit-card" && (
              <>
                <dialog id="my_modal_4" className="modal">
                  <form method="dialog" className="modal-box max-w-[32rem]">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <CreditCard />
                  </form>
                </dialog>
              </>
            )}

            {paymentMethod === "metamask" && (
              <>
                <dialog id="my_modal_5" className="modal">
                  <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <p>Already conected to metamask</p>
                  </form>
                </dialog>
              </>
            )}

            {/* -----------------------------PAYMENT CURRENCY---------------------------------- */}
            <p className="mt-8 text-left mb-2">Payment Currency: </p>
            <select
              className="select select-primary w-full max-w-x"
              onChange={handlePaymentMethodChange}
            >
              <option value="metamask">USDC</option>
            </select>

            {/* -----------------------------FEES---------------------------------- */}
            <p className=" mt-8 text-justify text-sm">Platform fee: $0.0</p>
            <p className="text-left text-sm">Processing fee: $0. 001 USDC</p>
          </div>

          <button
            className=" uppercase text-white text-2xl bg-primary rounded-full ml-52
            h-12 w-96 mt-6 flex items-center justify-center hover:bg-green-600"
            onClick={() => window.my_modal_1.showModal()}
          >
            Buy: $ {totalPrice}
          </button>

          {/* -----------------------------MODAL FOR THE CONGRATULATIONS FOR BUYING---------------------------------- */}
          <dialog id="my_modal_1" className="modal">
            <form
              method="dialog"
              className="modal-box flex flex-col items-center justify-center text-center"
            >
              <Link to="/marketplace">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>
              <h3 className="font-bold text-lg">Congratulations!</h3>
              <img src={land.image} alt="" className="mt-6 rounded-xl h-52" />
              <p className="py-4 font-bold">
                You have just purchased the property:{" "}
              </p>
              <p className="mb-6">
                {land.address} | {land.location}
              </p>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default BuyProperty;
