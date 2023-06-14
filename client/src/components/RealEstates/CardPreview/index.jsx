import css from "./index.module.scss";
import starICon from "../../../assets/star.svg";
import heartIconMobile from "../../../assets/heart--movile.svg";
import heartIconPc from "../../../assets/heart--pc.svg";
import { Link } from "react-router-dom";

const index = (props) => {
  return (
    <div className={css.card}>
      <Link className={css.link} to={`/marketplace/${props.number}`}>
        <img src={props.image} alt="" />
      </Link>
      <div className={css.info}>
        <div className={css.title}>
          <h3>{props.address}</h3>
          <p>{props.location}</p>
        </div>

        <div className={css.description}>
          <p>
            Pasive Income per Token: $ {props.PIT}
            <br />
            Proyected Rental Yield: $ {props.PRY}
            <br />
            Property Tokenised: {props.tokenised} % 
          </p>
        </div>
        <div className={css.rating}>
          <p>NFT Price:  <span>{props.NFTPrice}</span>    ·   </p> 
          <p>Available NFTs:<span>{props.AvailablesNFT}</span> </p> 
         
        </div>
      </div>
      <div className={css.price}>
        <p>Property Value: </p>
        <i>${props.price}</i>
      </div>
      <i className={css.heartIconMobile}>
        <img src={heartIconMobile} alt="heart" />
      </i>
      <i className={css.heartIconPc}>
        <img src={heartIconPc} alt="heart" />
      </i>
    </div>
  );
};

export default index;
