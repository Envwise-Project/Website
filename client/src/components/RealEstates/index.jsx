import Classes from "../MarketPlace/Classes/Classes.jsx";
import ModalFilter from "../MarketPlace/ModalFilter/ModalFilter.jsx";
import css from "./index.module.scss";
import db from "../RealEstates/fakedb/db.json";
import CardPreview from "./CardPreview";
import Footer from "./Footer/Footer.jsx";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/");
      }
    }
  }, [navigate, isAuthenticated, isLoading]);

  return (
    !isLoading && (
      <div className={css.container}>
        <Classes />
        <div className={css.filtersContainer}>
          <h2></h2>
          <div className={css.filters}>
            <div className={css.filtersSelect}>
              <select>
                <option hidden value="">
                  Status
                </option>
                <option className={css.option}>Buy now</option>
                <option>Not for sale</option>
              </select>
            </div>
            <ModalFilter />
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
                />
              ))
            : null}
        </section>
        <Footer />
      </div>
    )
  );
};

export default index;
