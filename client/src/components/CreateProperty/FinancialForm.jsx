import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";
import backBtn from "../../assets/back_btn.svg";

const FinancialForm = ({ handleSubmit, onBack }) => {
  return (
    <form className={css.createForm} onSubmit={handleSubmit}>
      <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Financial information</h2>
      </div>
      <ProgressBar step={"3"} />

      <div className={css.createForm__inputs}>
        <div className={css.inputContainer}>
          <div>
            <label>Market Value of the property</label>
            <input type="number" />
          </div>
          <div>
            <label>Investment Type</label>
            <select defaultValue="selected">
              <option value="selected" disabled>
                Select
              </option>
              <option value="passive-income">Passive Income Only</option>
              <option value="Capital-return">
                Passive Income + Capital Return
              </option>
            </select>
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Passive Income per token</label>
            <input type="number" />
          </div>
          <div>
            <label>Token price</label>
            <input type="number" />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Number of F-NFT available</label>
            <input type="number" />
          </div>
          <div>
            <label>Rental Yield</label>
            <input type="number" />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Percent of property tokenized</label>
            <input type="number" />
          </div>
        </div>
      </div>

      <button className={css.nextBtn}>Submit</button>
    </form>
  );
};

export default FinancialForm;
