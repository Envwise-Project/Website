import css from "./CreateProperty.module.css";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import OwnerForm from "./OwnerForm";
import PropertyForm from "./PropertyForm";
import FinancialForm from "./FinancialForm";
const serverURL = import.meta.env.VITE_SERVER_URL;

const CreateProperty = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const [images, setImages] = useState([]);
  const [ownerData, setOwnerData] = useState({
    Firstname: "",
    Surname: "",
    Address: "",
    City: "",
    State: "",
    Country: "",
    Postal_Code: "",
    Mail: "",
    Phone_number: "",
    Code_area: "",
    Passport_ID: "",
    Date_of_birth: "",
  });

  const [featureData, setFeatureData] = useState({
    Type: "",
    Country: "",
    City: "",
    Address: "",
    State: "",
    Postal_Code: "",
    Description: "",
    Square_foot: "",
    Amenities: "",
    Rooms: "",
    Occupancy_Status: "",
    Link_Image: images,
    Link_Document: "",
    Current_Emission: "",
    Expected_Emission_Level: "",
    More: "",
  });

  const [financialData, setFinancialData] = useState({
    Market_value_of_the_property: "",
    Mortgage: "",
    Investment_type: "",
    Percent_of_property_tokenized: "",
    Rental_yield: "",
    Number_of_tokens_available: "",
    Passive_Income_per_token: "",
    Token_Price: "",
    Monthly_capital_repayment_amount: "",
    Capital_payment_duration: "",
  });

  const [property, setProperty] = useState({
    ownerData,
    featureData,
    financialData,
  });

  const updateOwnerData = (field, value) => {
    setOwnerData({
      ...ownerData,
      [field]: value,
    });

    setProperty({
      ...property,
      ownerData: {
        ...ownerData,
        [field]: value,
      },
    });
  };

  const updateFeatureData = (field, value) => {
    setFeatureData({
      ...featureData,
      [field]: value,
    });

    setProperty({
      ...property,
      featureData: {
        ...featureData,
        [field]: value,
      },
    });
  };

  const updateFinancialData = (field, value) => {
    setFinancialData({
      ...financialData,
      [field]: value,
    });

    setProperty({
      ...property,
      financialData: {
        ...financialData,
        [field]: value,
      },
    });
  };

  const navigate = useNavigate();
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  let admin = null;

  if (user?.sub === import.meta.env.VITE_ADMIN_DEV1)
    admin = import.meta.env.VITE_ADMIN_DEV1;
  if (user?.sub === import.meta.env.VITE_ADMIN_DEV2)
    admin = import.meta.env.VITE_ADMIN_DEV2;
  if (user?.sub === import.meta.env.VITE_ADMIN_ALAN)
    admin = import.meta.env.VITE_ADMIN_ALAN;
  if (user?.sub === import.meta.env.VITE_ADMIN_GABRIEL)
    admin = import.meta.env.VITE_ADMIN_GABRIEL;
  if (user?.sub === import.meta.env.VITE_ADMIN_JAVVAD)
    admin = import.meta.env.VITE_ADMIN_JAVVAD;

  const handleLogin = () => {
    const redirectUri = `${window.location.origin}/marketplace/`;
    loginWithRedirect({
      redirectUri: redirectUri,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated || !admin) {
        handleLogin();
      }
    }
  }, [navigate, isAuthenticated, isLoading, admin]);

  const handleSubmit = async () => {
    try {
      const response = await fetch(serverURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(property),
      });

      if (response.ok) {
        alert("Request sent successfully!");
        console.log(property);
      } else {
        alert("Error sending the request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending the request.");
    }
  };

  const handleNext = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handleBack = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };

  return !isLoading && isAuthenticated && admin ? (
    <div className={css.formContainer}>
      {currentForm === 1 && (
        <OwnerForm
          handleSubmit={handleSubmit}
          onNext={handleNext}
          onChange={updateOwnerData}
          propertyData={property}
        />
      )}
      {currentForm === 2 && (
        <PropertyForm
          handleSubmit={handleSubmit}
          onBack={handleBack}
          onNext={handleNext}
          onChange={updateFeatureData}
          propertyData={property}
          setImages={setImages}
          images={images}
        />
      )}
      {currentForm === 3 && (
        <FinancialForm
          handleSubmit={handleSubmit}
          onBack={handleBack}
          onChange={updateFinancialData}
          propertyData={property}
        />
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default CreateProperty;
