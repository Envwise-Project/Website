import { Link } from "react-router-dom";
import logo from "../../../assets/ENVWISE.png";
import css from "./Footer.module.css";
import pdf from "../../Landing/assets/LBM-whitepaper.pdf";
import { networks } from "../../Landing/networks";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <img src={logo} alt="Libertum" className={css.image} />
      <div className={css.text}>
        <p>
          Our innovative approach involves incorporating advanced emission-wise
          AI technology and a streamlined learning management system into
          existing buildings to achieve zero-emission standards.
        </p>
        <i>© 2023 Envwise</i>
      </div>

      <div className={css.links}>
        <div className={css.navigation}>
          <a href="https://envwise.com/" target="_blank">
            HOME
          </a>

          <a href="https://envwise.com/" target="_blank">
            PRODUCT
          </a>

          <a href="https://envwise.com/" target="_blank" rel="noreferrer">
            I WANT TO BE PART
          </a>
        </div>
        <div className={css.socialmedia}>
          {networks.map(({ net, href }, index) => (
            <a key={index} href={href} target="_blank" rel="noreferrer">
              <img src={net} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
