import css from "./index.module.scss";
import { useParams, useNavigate } from "react-router-dom";
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
import Footer from "../RealEstates/Footer/Footer.jsx";

const Index = () => {
  const navigate = useNavigate();
  const number = useParams();
  const land = db.find((item) => item.number === number.id);

  return (
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
       
        <p className={css.description}>
          Come and stay in this superb duplex T2, in the heart of the historic
          center of Bordeaux. Spacious and bright, in a real Bordeaux building
          in exposed stone, you will enjoy all the charms of the city thanks to
          its ideal location. Close to many shops, bars and restaurants, you can
          access the apartment by tram A and C and bus routes 27 and 44. <br />{" "}
         
        </p>
        
      </div>

      <div className={css.filtersContainer}>
        <h2>ABOUT THE PROPERTY</h2>
        {/* <div className={css.filters}>
        
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
        </div> */}
      </div>
      <div>
      <div>
          <details>
           
           <summary>Details</summary>
            <p>About the property:</p> {land.amenities}
            <p>Address: </p> {land.address}
            <p>Occupancy Status</p>
            <p>Location</p>            
          </details>

          <details>
            <summary>Financials</summary>
            <p>Market value of the property:</p> {land.price}
            <p>Property Tokenised:</p> {land.Tokenised}
            <p>Rental Yield</p> {land.PRY}
            <p>F-NFT available</p> {land.AvailablesNFT}
            <p>Passive Income per token</p> {land.PIT}
            <p>Passive Income Calculator</p>
            <p>Number of Token to be purchased</p>
            <p>Monthly Passive Income - Calculator</p>
            <p>Annual Passive Income - Calculator</p>
            <p>Curren Emission Level</p>
            <p>Expected Emission level post sustainability</p>
            {/* Agrega más información relevante aquí */}
          </details>

          <details>
            <summary>Documents</summary>
            <p>Property Insurance Document</p> 
            <p>Charge Document </p>                  
          </details>

          <details>
            <summary>Buying Process</summary>
              
          </details>

        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default Index;
