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
import CardPreview from "./CardPreviewDetails.jsx";
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

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Punto de desplazamiento donde se fija el componente

      if (scrollPosition > threshold) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return !isLoading && isAuthenticated ? (
    <div className={css.details}>
      <img src={land.image} alt="Land" className={css.detailsImage} />
      <div className={css.navMobile}>
        <img
          src={backIcon}
          alt="back icon"
          onClick={() => navigate("/realestate")}
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
      </div>

      <header className={css.header}>
        <h2>{land.location}</h2>
        <div className={css.headerText}>
          <p>{land.address}</p>
          <div className={css.headerBtns}>
            <img src={sharePC} alt="share" />
            <img src={save} alt="save" />
          </div>
        </div>
        <img src={avatar} alt="Person" className={css.avatar} />
      </header>

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
        <h2>Entire rental unit hosted by Ghazal</h2>

        <p className=" text-xl text-left mt-3 mb-[-1rem]">ABOUT THE PROPERTY</p>
        <p className={css.description}>
          {land.description} <br />{" "}
        </p>
      </div>

      <div className="flex w-full  ">
        <div className="flex-grow">
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
          />
        </div>

        <div
          className={`fixed bottom-[-16rem] right-16 ${sticky ? "sticky" : ""}`}
        >
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
