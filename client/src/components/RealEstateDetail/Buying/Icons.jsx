import { FaBath, FaBed, FaWifi, FaParking   } from "react-icons/fa";
import css from "./Icons.module.css"


const Icons = () =>{
    
    return (
        <div className={css.iconsbig}>
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
      );
      
};

export default Icons; 
