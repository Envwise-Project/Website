import { useState } from "react";
import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";
import SelectCountry from "./SelectCountry";
import SelectCodeArea from "./SelectCodeArea";

const OwnerForm = ({ handleSubmit, onNext, onChange, propertyData }) => {
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const onlyLetters = /^[A-Za-z]+$/;

    if (!propertyData.ownerData.Firstname) {
      errors.Firstname = "First Name is required";
    } else if (!onlyLetters.test(propertyData.ownerData.Firstname)) {
      errors.Firstname = "First Name should contain only letters";
    }

    if (!propertyData.ownerData.Surname) {
      errors.Surname = "Surname is required";
    } else if (!onlyLetters.test(propertyData.ownerData.Surname)) {
      errors.Surname = "Surname should contain only letters";
    }

    if (!propertyData.ownerData.Mail) {
      errors.Mail = "Email is required";
    }

    if (!propertyData.ownerData.Country) {
      errors.Country = "Country is required";
    }

    if (!propertyData.ownerData.City.trim()) {
      errors.City = "City is required";
    } 

    if (!propertyData.ownerData.State) {
      errors.State = "Region / State / Province is required";
    } else if (!onlyLetters.test(propertyData.ownerData.State)) {
      errors.State = "It should contain only letters";
    }

    if (!propertyData.ownerData.Address) {
      errors.Address = "Address is required";
    }

    if (!propertyData.ownerData.Postal_Code) {
      errors.Postal_Code = "Postal Code is required";
    }

    if (!propertyData.ownerData.Code_area) {
      errors.Code_area = "Code Area is required";
    }

    if (
      propertyData.ownerData.Phone_number < 0 ||
      !propertyData.ownerData.Phone_number || propertyData.ownerData.Phone_number.length < 5
    ) {
      errors.Phone_number = "Phone Number is required";
    }

    if (!propertyData.ownerData.Passport_ID) {
      errors.Passport_ID = "Passport / ID is required";
    }

    if (!propertyData.ownerData.Date_of_birth) {
      errors.Date_of_birth = "Date of birth is required";
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
      <h2>Owner information</h2>
      <ProgressBar step="1" />

      <div className={css.createForm__inputs}>
        <div className={css.inputContainer}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={propertyData.ownerData.Firstname}
              onChange={(e) => {
                onChange("Firstname", e.target.value.trim());
              }}
            />
            {formErrors.Firstname && (
              <p className={css.error}>{formErrors.Firstname}</p>
            )}
          </div>
          <div>
            <label>Surname</label>
            <input
              type="text"
              value={propertyData.ownerData.Surname}
              onChange={(e) => {
                onChange("Surname", e.target.value.trim());
              }}
            />
            {formErrors.Surname && (
              <p className={css.error}>{formErrors.Surname}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Email</label>
            <input
              type="Email"
              value={propertyData.ownerData.Mail}
              onChange={(e) => {
                onChange("Mail", e.target.value);
              }}
            />
            {formErrors.Mail && <p className={css.error}>{formErrors.Mail}</p>}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Country</label>
            <SelectCountry
              onChange={onChange}
              propertyData={propertyData}
              form="ownerData"
            />
            {formErrors.Country && (
              <p className={css.error}>{formErrors.Country}</p>
            )}
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              value={propertyData.ownerData.City}
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
              value={propertyData.ownerData.State}
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
              value={propertyData.ownerData.Address}
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
              value={propertyData.ownerData.Postal_Code}
              onChange={(e) => {
                onChange("Postal_Code", e.target.value);
              }}
            />
            {formErrors.Postal_Code && (
              <p className={css.error}>{formErrors.Postal_Code}</p>
            )}
          </div>
          <div>
            <label>Phone Number</label>
            <div className={css.codeNumber}>
              <SelectCodeArea onChange={onChange} propertyData={propertyData} />
              <input
                type="number"
                value={propertyData.ownerData.Phone_number}
                onChange={(e) => {
                  onChange("Phone_number", e.target.value);
                }}
              />
            </div>
            {formErrors.Code_area && (
              <p className={css.error}>{formErrors.Code_area}</p>
            )}
            {formErrors.Phone_number && (
              <p className={css.error}>{formErrors.Phone_number}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Passport / ID</label>
            <input
              type="text"
              value={propertyData.ownerData.Passport_ID}
              onChange={(e) => {
                onChange("Passport_ID", e.target.value);
              }}
            />
            {formErrors.Passport_ID && (
              <p className={css.error}>{formErrors.Passport_ID}</p>
            )}
          </div>
          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              value={propertyData.ownerData.Date_of_birth}
              onChange={(e) => {
                onChange("Date_of_birth", e.target.value);
              }}
            />
            {formErrors.Date_of_birth && (
              <p className={css.error}>{formErrors.Date_of_birth}</p>
            )}
          </div>
        </div>
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

export default OwnerForm;
