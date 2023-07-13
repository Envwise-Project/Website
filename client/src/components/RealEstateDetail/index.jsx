import css from "./index.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import db from "../RealEstates/fakedb/db.json";
import heartMobile from "../../assets/heart--movile.svg";
import shareIcon from "../../assets/share.svg";
import backIcon from "../../assets/vector.svg";
import starIcon from "../../assets/star.svg";
import avatar from "../../assets/avatar.svg";
import right from "../../assets/right.svg";
import sharePC from "../../assets/share--pc.svg";
import save from "../../assets/save.svg";
import showAll from "../../assets/showAll.svg";
import ModalFilter from "../MarketPlace/ModalFilter/ModalFilter.jsx";

import Aboutproperty from "./Aboutproperty";
import Buy from "./Buy";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const number = useParams();
  const land = db.find((item) => item.number === number.id);

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



  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return !isLoading && isAuthenticated ? (
    <div className={css.details}>
   


      <header className={css.header}>
        <h2>{land.address}</h2>
        <div className={css.headerText}>
          <p>{land.location}</p>
          {/* <div className={css.headerBtns}>
            <img src={sharePC} alt="share" />
            <img src={save} alt="save" />
          </div> */}
        </div>
        {/* <img src={avatar} alt="Person" className={css.avatar} /> */}
      </header>
      
      <img src={land.image} alt="Land" className={css.detailsImage} />
      {/* <div className={css.navMobile}>
        <img
          src={backIcon}
          alt="back icon"
          onClick={() => navigate("/marketplace")}
        />
        <div className={css.navMobileItems}>
          <div>
            <img src={shareIcon} alt="Share" />
            <p>Share</p>
          </div>
          <div>
            <img src={heartMobile} alt="Heart" />
            <p>Like</p>
          </div>
        </div>
      </div> */}

      <section className={css.mosaic}>
        <img src={land.image} alt="" />
        <div className={css.otherImages}>
          <img src={land.image2} alt="Land" />
          <img src={land.image3} alt="Land" />
          <img src={land.image4} alt="Land" />
          <img src={land.image5} alt="Land" />
        </div>
      </section>

      


      <div className={css.info}>
             
          <Aboutproperty
            id={land.id}
            image={land.image}
            number={land.number}
            value={land.price}
            Tokenised={land.Tokenised}
            PRY={land.PRY}
            AvailablesNFT={land.AvailablesNFT}
            PIT={land.PIT}
            address={land.address}
            location={land.location}
            NFTPrice={land.NFTPrice}
            amenities={land.amenities}
            rooms={land.rooms}
            guests={land.guests}
            map={land.map}
            more={land.more}
            description= {land.description}
            capital={land.capital}
          />
        

        <div className={isScrolled ? css.buycontainer : ''}>
          <Buy
            id={land.id}
            image={land.image}
            number={land.number}
            value={land.price}
            Tokenised={land.Tokenised}
            PRY={land.PRY}
            AvailablesNFT={land.AvailablesNFT}
            PIT={land.PIT}
            address={land.address}
            location={land.location}
            NFTPrice={land.NFTPrice}
          />
        </div>
      </div>
    </div>
  ) : <Loading />
};

export default Index;
