import css from "./CreateProperty.module.css";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import OwnerForm from "./OwnerForm";
import PropertyForm from "./PropertyForm";
import FinancialForm from "./FinancialForm";

const CreateProperty = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const navigate = useNavigate();
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  let admin = null;

  if (user?.sub === import.meta.env.VITE_ADMIN_DEV1)
    admin = import.meta.env.VITE_ADMIN_DEV1;
  if (user?.sub === import.meta.env.VITE_ADMIN_DEV2)
    admin = import.meta.env.VITE_ADMIN_DEV2;
  if (user?.sub === import.meta.env.VITE_ADMIN_ALAN)
    admin = import.meta.env.VITE_ADMIN_ALAN;
  if (user?.sub === import.meta.env.VITE_ADMIN_LUIS)
    admin = import.meta.env.VITE_ADMIN_LUIS;
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

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <OwnerForm handleSubmit={handleSubmit} onNext={handleNext} />
      )}
      {currentForm === 2 && (
        <PropertyForm
          handleSubmit={handleSubmit}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {currentForm === 3 && (
        <FinancialForm handleSubmit={handleSubmit} onBack={handleBack} />
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default CreateProperty;
