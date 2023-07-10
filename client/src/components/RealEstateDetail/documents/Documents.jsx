import { Link } from "react-router-dom";
import plano1 from "./plano1.pdf"
import plano2 from "./plano2.pdf"
import document1 from "./Register1.pdf"
import document2 from "./Register2.pdf"
import  style  from "../Aboutproperty.module.scss"
import { BsDownload } from "react-icons/bs"


const Documents = () => {

    return(
        <div>
            
            <Link
             to={plano1}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}>            
                 
              <span style={{ display: 'inline-flex', alignItems: 'center',  marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: '#2ea828',    padding: '5px'}}>
                <BsDownload />              
              </span>
              Download <b>Blueprint</b>
            </p>
            </Link>

            <Link
             to={document1}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}>
            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: '#2ea828',    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Title</b></p>

              </Link>

            <Link
             to={document2}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}
            >
            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: '#2ea828',    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Smart Contract</b></p>

            </Link>
        </div>
    )}; 

export default Documents; 
