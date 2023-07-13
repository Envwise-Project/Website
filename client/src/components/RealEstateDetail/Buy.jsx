import { Link } from "react-router-dom";
import style from "./Aboutproperty.module.scss";
import { FaBath, FaBed, FaWifi, FaParking   } from "react-icons/fa";

const Buy = (props) => {
  const { image, number, address, location, PIT, PRY, AvailablesNFT } = props;

  return (
           <div
          className={style.column-2}        >          
            <div className={style.buycontainer}>
              <h1>{location} | {address} </h1>
            
              <div className={style.icons}>
                <div>
                  <span><FaBath /></span>
                  <p>2 bath</p>
                </div>
                <div>
                  <span><FaBed /></span>
                  <p>3 rooms</p>
                </div>
                <div>
                  <span><FaWifi /></span>
                  <p>Free Wifi</p>
                </div>
                <div>
                  <span><FaParking /></span>
                  <p>Parking</p>
                </div>
              </div>


            <div className={style.cardbody}>

              <div className={style.cardtext}>
              <p><b>Passive Income Per Token:</b> {PIT}</p>
              <p><b>Projected Rental Yield:</b> ${PRY}</p>
              <p><b>Tokens Availables:</b> {AvailablesNFT}</p>

              </div>
              

              <div className={style.cardbutton}>
                <Link
                  to={`/marketplace/buy/${number}`}
                >
                  <button className={style.button}>Invest Now! </button>
                </Link>
              </div>
            </div>
            </div>

          </div> 
  );
};

export default Buy;
