import style from "./indexnew.module.scss"
import starIcon from "../../../assets/star.svg";
import heartIconMobile from "../../../assets/heart--movile.svg";
import heartIconPc from "../../../assets/heart--pc.svg";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = (props) => {
  const { number, image, address, location, PIT, PRY, tokenised, NFTPrice, AvailablesNFT, price } = props;


 
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Link  to={`/marketplace/${number}`}>        
          <img src={image} alt="image of the property" />        
        </Link>
        <div className={style.funded}>
          <div className={style.informacion}>
            <div className={style.progressBar}></div>
            <div className={style.fundedtext}>44 % funded</div>            
          </div>  
        </div>
      </div>
        <div className={style.content}>
        <div className={style.header}>
          <div className={style.titleSubtitle}>
            <h3>{location}</h3>
            <p>{address}</p>
          </div>   

          {/* <div className={style.capitalReturnContainer}>
          <svg width="89" height="22" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 11C0 4.92487 4.92487 0 11 0H78C84.0751 0 89 4.92487 89 11V11C89 17.0751 84.0751 22 78 22H11C4.92487 22 0 17.0751 0 11V11Z" fill="#F7931A"/>          
          </svg>
          <p>CAPITAL RETURN</p>
          
          </div>      

          <div className={style.passiveIncomeContainer}>
          <svg width="89" height="22" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 11C0 4.92487 4.92487 0 11 0H78C84.0751 0 89 4.92487 89 11V11C89 17.0751 84.0751 22 78 22H11C4.92487 22 0 17.0751 0 11V11Z" fill="#F7931A"/>          
          </svg>
          <p>PASSIVE INCOME</p>
          </div>   */}

          <div className={style.saveIcon}>
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 5H9C7.346 5 6 6.346 6 8V27C6.00006 27.1872 6.05265 27.3706 6.15179 27.5294C6.25094 27.6881 6.39265 27.8159 6.56082 27.8981C6.72898 27.9803 6.91685 28.0137 7.10303 27.9944C7.28922 27.9751 7.46626 27.9039 7.614 27.789L16 21.267L24.386 27.789C24.5335 27.9043 24.7106 27.9757 24.8968 27.995C25.0831 28.0143 25.271 27.9806 25.439 27.898C25.6072 27.8158 25.7489 27.6881 25.8481 27.5293C25.9473 27.3706 25.9999 27.1872 26 27V8C26 6.346 24.654 5 23 5ZM24 24.956L16.614 19.211C16.4386 19.0741 16.2226 18.9997 16.0002 18.9995C15.7777 18.9994 15.5616 19.0734 15.386 19.21L8 24.956V8C8 7.449 8.449 7 9 7H23C23.551 7 24 7.449 24 8V24.956Z" fill="black"/>
          </svg>

          </div>            
        </div>

        <div className={style.description}>
          <p>Pasive Income per Token: ${PIT} </p>
          <p>Projected Rental Yield: ${PRY}</p>
          <p> Property Tokenised: {tokenised}%</p>

        </div>

        <div className={style.rating}>

        <div className={style.nfts}>
        <p>NFT Price: <span>{NFTPrice}</span> ·</p>
        <p>Available NFTs:<span>{AvailablesNFT}</span></p>   

        </div>
    
           <div className={style.price}>
                  <p>Property Value:</p>
                  <i>${price}</i>
          </div> 
        </div>


     
       </div>



      </div>
   
  )}




//     <div className={css.card}>
//       <div className={css.header}>

//       </div>
//       <Link className={css.link} to={`/marketplace/${number}`}>        
//           <img src={image} alt="image of the property" />        
//       </Link>
//       <div className={css.info}>
//         <div className={css.title}>
//           <h3>{address}</h3>
//           <p>{location}</p>
//         </div>

//         <div className={css.description}>
//           <p>
//             Pasive Income per Token: ${PIT}
//             <br />
//             Projected Rental Yield: ${PRY}
//             <br />
//             Property Tokenised: {tokenised}%
//           </p>
//         </div>
//         <div className={css.rating}>
//           <p>
//             NFT Price: <span>{NFTPrice}</span> ·
//           </p>
//           <p>
//             Available NFTs:<span>{AvailablesNFT}</span>
//           </p>
//         </div>
//       </div>
//       <div className={css.price}>
//         <p>Property Value:</p>
//         <i>${price}</i>
//       </div>
//       <i className={css.heartIconMobile}>
//       < BsBookmarkFill />
//       </i>
//       <i className={css.heartIconPc}>

//       <BsBookmark />
//       </i>
//     </div>
//   );
// };

export default Index;

