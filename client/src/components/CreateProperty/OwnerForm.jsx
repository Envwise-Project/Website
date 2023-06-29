import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";
import SelectCountry from "./SelectCountry";
import SelectCodeArea from "./SelectCodeArea";

const OwnerForm = ({ handleSubmit, onNext }) => {
  return (
    <form className={css.createForm} onSubmit={handleSubmit}>
      <h2>Owner information</h2>
      <ProgressBar step="1" />

      <div className={css.createForm__inputs}>
        <div className={css.inputContainer}>
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Surname</label>
            <input type="text" />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Email</label>
            <input type="Email" />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Country</label>
            <SelectCountry />
          </div>
          <div>
            <label>City</label>
            <input type="text" />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Region / State / Province</label>
            <input type="text" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Postal Code</label>
            <input type="text" />
          </div>
          <div>
            <label>Phone Number</label>
            <div className={css.codeNumber}>
              <SelectCodeArea />
              <input type="number" />
            </div>
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Passport / ID</label>
            <input type="text" />
          </div>
          <div>
            <label>Date of Birth</label>
            <input type="date" />
          </div>
        </div>
      </div>

      <button className={css.nextBtn} onClick={onNext}>
        Next
      </button>
    </form>
  );
};

export default OwnerForm;
