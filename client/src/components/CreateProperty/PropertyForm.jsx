import { useState } from "react";
import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";
import backBtn from "../../assets/back_btn.svg";
import SelectCountry from "./SelectCountry";
import UploadImages from "./UploadImages";

const PropertyForm = ({
  handleSubmit,
  onBack,
  onNext,
  onChange,
  propertyData,
  setImages,
  images,
}) => {
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const onlyLetters = /^[A-Za-z\s]+$/;

    if (
      !propertyData.featureData.Square_foot ||
      propertyData.featureData.Square_foot < 1
    ) {
      errors.Square_foot = "Square Foot is required";
    }

    if (!propertyData.featureData.Type) {
      errors.Type = "Type is required";
    }

    if (!propertyData.featureData.Country) {
      errors.Country = "Country is required";
    }

    if (!propertyData.featureData.City.trim()) {
      errors.City = "City is required";
    } else if (!onlyLetters.test(propertyData.featureData.City)) {
      errors.City = "City should contain only letters";
    }

    if (!propertyData.featureData.State.trim()) {
      errors.State = "Region / State / Province is required";
    } else if (!onlyLetters.test(propertyData.featureData.State)) {
      errors.State = "It should contain only letters";
    }

    if (!propertyData.featureData.Address.trim()) {
      errors.Address = "Address is required";
    }

    if (!propertyData.featureData.Postal_Code.trim()) {
      errors.Postal_Code = "Postal Code is required";
    }

    if (!propertyData.featureData.Occupancy_Status) {
      errors.Occupancy_Status = "Occupancy Status is required";
    }

    if (!propertyData.featureData.Rooms || propertyData.featureData.Rooms < 0) {
      errors.Rooms = "Rooms is required";
    }

    if (!propertyData.featureData.Amenities.trim()) {
      errors.Amenities = "Amenities are required";
    }

    if (!propertyData.featureData.Description.trim()) {
      errors.Description = "Description is required";
    }

    if (
      !propertyData.featureData.Current_Emission ||
      propertyData.featureData.Current_Emission < 0
    ) {
      errors.Current_Emission = "Current Emission is required";
    }

    if (
      !propertyData.featureData.Expected_Emission_Level ||
      propertyData.featureData.Expected_Emission_Level < 0
    ) {
      errors.Expected_Emission_Level = "Expected Emission Level is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleBtn = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    isValid ? onNext() : console.log(formErrors);
  };

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
            <label>Square Foot</label>
            <input
              type="number"
              value={propertyData.featureData.Square_foot}
              onChange={(e) => {
                onChange("Square_foot", e.target.value);
              }}
            />
            {formErrors.Square_foot && (
              <p className={css.error}>{formErrors.Square_foot}</p>
            )}
          </div>
          <div>
            <label>Type</label>
            <select
              value={propertyData.featureData.Type}
              onChange={(e) => {
                onChange("Type", e.target.value);
              }}
            >
              <option value="">Select</option>
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
            {formErrors.Type && <p className={css.error}>{formErrors.Type}</p>}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Country</label>
            <SelectCountry
              onChange={onChange}
              propertyData={propertyData}
              form="featureData"
            />
            {formErrors.Country && (
              <p className={css.error}>{formErrors.Country}</p>
            )}
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              value={propertyData.featureData.City}
              onChange={(e) => {
                onChange("City", e.target.value);
              }}
            />
            {formErrors.City && <p className={css.error}>{formErrors.City}</p>}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Region / State / Province</label>
            <input
              type="text"
              value={propertyData.featureData.State}
              onChange={(e) => {
                onChange("State", e.target.value);
              }}
            />
            {formErrors.State && (
              <p className={css.error}>{formErrors.State}</p>
            )}
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              value={propertyData.featureData.Address}
              onChange={(e) => {
                onChange("Address", e.target.value);
              }}
            />
            {formErrors.Address && (
              <p className={css.error}>{formErrors.Address}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Postal Code</label>
            <input
              type="text"
              value={propertyData.featureData.Postal_Code}
              onChange={(e) => {
                onChange("Postal_Code", e.target.value);
              }}
            />
            {formErrors.Postal_Code && (
              <p className={css.error}>{formErrors.Postal_Code}</p>
            )}
          </div>
          <div>
            <label>Occupancy Status</label>
            <select
              value={propertyData.featureData.Occupancy_Status}
              onChange={(e) => {
                onChange("Occupancy_Status", e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="free">Free</option>
              <option value="occupied">Occupied</option>
              <option value="long term lease">Long Term Lease</option>
              <option value="short term lease">Short Term Lease</option>
            </select>
            {formErrors.Occupancy_Status && (
              <p className={css.error}>{formErrors.Occupancy_Status}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Rooms</label>
            <input
              type="number"
              value={propertyData.featureData.Rooms}
              onChange={(e) => {
                onChange("Rooms", e.target.value);
              }}
            />
            {formErrors.Rooms && (
              <p className={css.error}>{formErrors.Rooms}</p>
            )}
          </div>
          <div>
            <label>Amenities</label>
            <input
              type="text"
              value={propertyData.featureData.Amenities}
              onChange={(e) => {
                onChange("Amenities", e.target.value);
              }}
            />
            {formErrors.Amenities && (
              <p className={css.error}>{formErrors.Amenities}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>More / Extra</label>
            <input
              type="text"
              value={propertyData.featureData.More}
              onChange={(e) => {
                onChange("More", e.target.value);
              }}
            />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Description</label>
            <textarea
              value={propertyData.featureData.Description}
              onChange={(e) => {
                onChange("Description", e.target.value);
              }}
            ></textarea>
            {formErrors.Description && (
              <p className={css.error}>{formErrors.Description}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Current Emission</label>
            <input
              type="number"
              value={propertyData.featureData.Current_Emission}
              onChange={(e) => {
                onChange("Current_Emission", e.target.value);
              }}
            />
            {formErrors.Current_Emission && (
              <p className={css.error}>{formErrors.Current_Emission}</p>
            )}
          </div>
          <div>
            <label>Expected Emission Level</label>
            <input
              type="number"
              value={propertyData.featureData.Expected_Emission_Level}
              onChange={(e) => {
                onChange("Expected_Emission_Level", e.target.value);
              }}
            />
            {formErrors.Expected_Emission_Level && (
              <p className={css.error}>{formErrors.Expected_Emission_Level}</p>
            )}
          </div>
        </div>
        <UploadImages
          onChange={onChange}
          setImages={setImages}
          images={images}
        />
      </div>

      <button
        className={css.nextBtn}
        onClick={(event) => {
          handleBtn(event);
        }}
      >
        Next
      </button>
    </form>
  );
};

export default PropertyForm;
