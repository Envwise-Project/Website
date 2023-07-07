import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import db from "../../RealEstates/fakedb/db.json";
// import BankTransfer from "./BankTransfer";
// import CreditCard from "./CreditCard";
// import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../Loading/Loading";
import css from "./BuyProperty.module.css"
import ConfirmTokens from "./ConfirmTokens.jsx";
import ConfirmInvestment from "./ConfirmInvestment.jsx";
import PaymentMethod from "./PaymentMethod.jsx"

const BuyProperty = () => {
  const { number } = useParams();
  const land = db.find((item) => item.number === number);

  const [rangeValue, setRangeValue] = useState(40);

  const [formData, setFormData] = useState({
    tokensData: {},
    paymentMethodData: {},
  });

  const [currentForm, setCurrentForm] = useState(1);

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


  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const priceNFT = parseInt(land.NFTPrice);
  const totalPrice = rangeValue * priceNFT;
  const availables = land.AvailablesNFT;

  // const handlePaymentMethodChange = (event) => {
  //   setPaymentMethod(event.target.value);
  // };

  // const handleConnectWallet = () => {
  //   setIsConnected(true);
  // };

  const handleSubmit = (data) => {
    // Actualizar el estado con la información del formulario actual
    if (currentForm === 1) {
      setFormData((prevData) => ({
        ...prevData,
        tokensData: data,
      }));
    } else if (currentForm === 2) {
      setFormData((prevData) => ({
        ...prevData,
        paymentMethodData: data,
      }));
    }

    // Avanzar al siguiente formulario
    setCurrentForm(currentForm + 1);
    console.log(data);
  };

  const handleBack = () => {
    // Retroceder al formulario anterior
    setCurrentForm(currentForm - 1);
  };

  const handleNext = () => {
    // Avanzar al siguiente formulario
    setCurrentForm(currentForm + 1);
  };


  return !isLoading && isAuthenticated ? (
    <div className={css.formContainer}>
    {currentForm === 1 && (
      <ConfirmTokens handleSubmit={handleSubmit} onNext={handleNext} />
    )}
    {currentForm === 2 && (
      <PaymentMethod
        handleSubmit={handleSubmit}
        onBack={handleBack}
        onNext={handleNext}
      />
    )}
    {currentForm === 3 && (
      <ConfirmInvestment handleSubmit={handleSubmit} onBack={handleBack} formData={formData}/>
    )}
  </div>

  ) : (
    <Loading />
  );
};

export default BuyProperty;
