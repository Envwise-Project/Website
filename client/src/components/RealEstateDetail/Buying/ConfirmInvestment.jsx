import css from "./BuyProperty.module.css";
import ProgressBar from "../../CreateProperty/ProgressBar";
import backBtn from '../../../assets/back_btn.svg';
import { useParams } from "react-router-dom"; 
import db from "../../RealEstates/fakedb/db.json";
import Icons from "./Icons";
import { useState } from "react";
import { useEffect } from "react";

const ConfirmInvestment = ({ handleSubmit, onBack, formData }) => {
  const { number } = useParams();
  const land = db.find((item) => item.number === number);
  console.log(formData)

  const [subtotal, setSubtotal] = useState(0);

  // Actualiza el subtotal cuando se recibe el formData
  useEffect(() => {
    const calculateSubtotal = () => {
      const { tokensData } = formData;
      const { rangeValue } = tokensData;

      const calculatedSubtotal = rangeValue * land.NFTPrice;
      setSubtotal(calculatedSubtotal);
    };

    calculateSubtotal();
  }, [formData, land.NFTPrice]);

  return (
    <form className={css.createForm} onSubmit={handleSubmit}>
      <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Financial information</h2>
      </div>
      <ProgressBar step={"3"} />

      <h1>
         {land.address} | {land.location}             
      </h1>          
      <Icons /> 

      <div className={css.createForm__inputs}></div>

      <div className={css.box}>
        <div>
          <label><b>Value of the Property:</b></label>
          <span>${land.price}</span>
        </div>
        <div>
          <label><b>Tokens to be Purchased:</b></label>
          <span>{formData.tokensData.rangeValue}</span>
        </div>
        <div>
          <label><b>Payment Method:</b></label>
          <span>{formData.paymentMethodData.method}</span>
        </div>
        <div>
          <label><b>Payment Currency:</b></label>
          <span>{formData.paymentMethodData.currency}</span>
        </div>
      </div>
      
      <div className={css.fees}>
        <p>Platform fee $0.00</p>  
        <p>Platform fee $0.00</p>  
      </div> 

      <div className={css.inputContainer}>
        <div className={css.subtotal}>
          <h2><b>SUBTOTAL:</b> ${subtotal}</h2>
        </div>
      </div>

      <button className={css.nextBtn}>Invest Now!</button>
    </form>
  );
};

export default ConfirmInvestment;
