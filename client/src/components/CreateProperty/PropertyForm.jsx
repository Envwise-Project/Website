import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";
import backBtn from "../../assets/back_btn.svg";
import imageIcon from "../../assets/image.svg";
import documentIcon from "../../assets/document.svg";
import SelectCountry from "./SelectCountry";

const PropertyForm = ({ handleSubmit, onBack, onNext }) => {
  return (
    <form className={css.createForm} onSubmit={handleSubmit}>
      <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Property information</h2>
      </div>
      <ProgressBar step={"2"} />

      <div className={css.createForm__inputs}>
        <div className={css.inputContainer}>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Type</label>
            <select defaultValue="selected">
              <option value="selected" disabled>
                Select
              </option>
              <option value="green">Green / Sustainable</option>
              <option value="high-yield">High Yield</option>
              <option value="build-ukraine">
                Help Build Ukraine Properties
              </option>
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
              <option value="hotels">Hotels</option>
              <option value="agriculture">Agriculture</option>
              <option value="farm-house">Farm House</option>
              <option value="development-fund">Development Fund</option>
              <option value="industrial">Industrial</option>
              <option value="boat-house">Boat House</option>
            </select>
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
            <label>Occupancy Status</label>
            <select defaultValue="selected">
              <option value="selected" disabled>
                Select
              </option>
              <option value="free">Free</option>
              <option value="occupied">Occupied</option>
              <option value="long term lease">Long Term Lease</option>
              <option value="short term lease">Short Term Lease</option>
            </select>
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Rooms</label>
            <input type="text" />
          </div>
          <div>
            <label>Amenities</label>
            <input type="text" />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Mortgage</label>
            <input type="number" />
          </div>
          <div>
            <label>More / Extra</label>
            <input type="text" />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Description</label>
            <textarea></textarea>
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Current Emission</label>
            <input type="text" />
          </div>
          <div>
            <label>Expected Emission Level</label>
            <input type="text" />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Images</label>
            <div className={css.drop}>
              <img src={imageIcon} alt="image icon" />
              <p>Upload pictures of the property. JPG or PNG</p>
              <button>Browse</button>
            </div>
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Documents</label>
            <div className={css.drop}>
              <img src={documentIcon} alt="Documents Icon" />
              <p>Upload Documents of the property. Doc or PDF</p>
              <button>Browse</button>
            </div>
          </div>
        </div>
      </div>

      <button className={css.nextBtn} onClick={onNext}>
        Next
      </button>
    </form>
  );
};

export default PropertyForm;
