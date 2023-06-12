import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Home/Home";
import Protocol from "./Protocol/Protocol";
import Services from "./Services/Services";
import Value from "./Value/Value";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";
import divider from "./assets/divider.png";
import "./Landing.scss";
import Loading from "../Loading/Loading";

export default function Landing() {
  const { isLoading } = useAuth0();

  return !isLoading ? (
    <div>
      <Home />
      <Protocol />
      <img src={divider} className="divider" />
      <Services />
      <img src={divider} className="divider" />
      <Value />
      <img src={divider} className="divider" />
      <Subscribe />
      <Footer />
    </div>
  ) : (
    <Loading />
  );
}
