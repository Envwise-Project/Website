import Classes from "../MarketPlace/Classes/Classes.jsx";
import ModalFilter from "../MarketPlace/ModalFilter/ModalFilter.jsx";
import css from "./index.module.scss";
import db from "../RealEstates/fakedb/db.json";
import CardPreview from "./CardPreview";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

const index = () => {
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


  const [rentalYield, setRentalYield] = useState(0); // Estado para almacenar el valor del filtrado

  const handleRentalYieldChange = (event) => {
    setRentalYield(Number(event.target.value));
  };

  
  return !isLoading && isAuthenticated ? (
    <div className={css.container}>
      <Classes />
      <div className={css.filtersContainer}>
       
        <div className={css.filters}>
          <div className={css.filtersSelect}>
            <select>
              <option hidden value="">
                Finance Type
              </option>
              <option className={css.option}>Passive Income Only</option>
              <option>Capital Rep. + Passive Income</option>
            </select>
          </div>

          <div className={css.sliderContainer}>
        <label htmlFor="rentalYieldSlider">Projected Rental Yield: {rentalYield}%</label>
        <input
          type="range"
          id="rentalYieldSlider"
          min={0}
          max={100}
          value={rentalYield}
          onChange={handleRentalYieldChange}
        />
      </div>

          <div className={css.filtersSelect}>
            <select>
              <option hidden value="">
                Location
              </option>
              <option className={css.option}>USA</option>
              <option>UK</option>
            </select>
          </div>

          {/* <ModalFilter /> */}
        </div>
      </div>

      <section>
        {db.length
          ? db.map((land) => (
              <CardPreview
                image={land.image}
                image2={land.image2}
                image3={land.image3}
                image4={land.image4}
                image5={land.image5}
                key={land.number}
                number={land.number}
                price={land.price}
                review={land.review}
                totalReviews={land.totalreviews}
                amenities={land.amenities}
                rooms={land.rooms}
                guests={land.guests}
                type={land.type}
                address={land.address}
                location={land.location}
                PIT={land.PIT}
                PRY={land.PRY}
                tokenised={land.Tokenised}
                NFTPrice={land.NFTPrice}
                AvailablesNFT={land.AvailablesNFT}
                capital={land.capital}
              />
            ))
          : null}
      </section>
    </div>
  ) : (
    <Loading />
  );
};

export default index;
