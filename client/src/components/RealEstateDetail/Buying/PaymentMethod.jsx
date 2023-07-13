import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../RealEstates/fakedb/db.json';
import css from './BuyProperty.module.css';
import ProgressBar from '../../CreateProperty/ProgressBar';
import backBtn from '../../../assets/back_btn.svg';
import Icons from './Icons';
import BankTransfer from './BankTransfer';
import CreditCard from './CreditCard';

const PaymentMethod = ({ handleSubmit, onNext, onBack }) => {
  const { number } = useParams();
  const land = db.find((item) => item.number === number);

  const [selectedMethod, setSelectedMethod] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handlePaymentMethod = (method) => {
    setSelectedMethod(method);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      method: selectedMethod,
      currency: selectedCurrency,
    };
    handleSubmit(data);
  };

  return (
    <>
      <form className={css.createForm} onSubmit={handleFormSubmit}>
        <div className={css.formHeader}>
          <button onClick={onBack}>
            <img src={backBtn} alt="Back" />
          </button>
          <h2>Payment Method</h2>
        </div>
        <ProgressBar step={'2'} />
        <h1>
          {land.address} | {land.location}
        </h1>
        <Icons />

        <div className={css.createForm__inputs}>
          <div className={css.inputContainer}>
            <div>
              <label>Payment Method</label>
              <select value={selectedMethod} onChange={(e) => handlePaymentMethod(e.target.value)}>
                <option value="" disabled>
                  Select
                </option>
                <option value="Metamask">Metamask</option>
                <option value="Banktransfer">Bank Transfer</option>
                <option value="CreditCard">Credit Card</option>
              </select>
            </div>
          </div>

          <div className={css.inputContainer}>
            <div>
              <label>Payment Currency</label>

              <select defaultValue="selected">
                <option value="selected" disabled>
                  Select
                </option>
                <option value="USDT">USDT</option>
              </select>
            </div>
          </div>
        </div>

        {showModal && (
          <div className={css.modalContainer}>
            <div className={css.modalBackground} onClick={handleModalClose}></div>
            <div className={css.modalContent}>
              
              {/* Agrega el contenido específico para cada método de pago aquí */}
              {selectedMethod === 'Metamask' && (
                <div>
                  Your Metamask Wallet is already connected
                </div>
              )}
              {selectedMethod === 'Banktransfer' && (
                <div>
                  <BankTransfer />
                </div>
              )}
              {selectedMethod === 'CreditCard' && (
                <div>
                  <CreditCard />
                </div>
              )}
              <button className={css.buttonmodal} onClick={handleModalClose}>Continue</button>
            </div>
          </div>
        )}

        <button className={css.nextBtn} onClick={onNext}>
          Next
        </button>
      </form>
    </>
  );
};

export default PaymentMethod;
