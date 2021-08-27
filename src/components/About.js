import "./about.css";
import AboutCards from "./AboutCards";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div></div>
      <p>
        <b>
          <br></br>En digital berättelse skapad av:
          </b><br></br>
          <br></br>Jimmy - GA
          <br></br>Johan - GP
          <br></br>Alexandra - MF
          <br></br>Malin - UX
          <br></br>Carolina - WU
          <br></br>Gilda - WU
      </p>
      <div></div>
      <AboutCards></AboutCards>
      <div></div>
      <p>
        <b>
          Ett samarbete mellan <a href="https://www.yrgo.se/">Yrgo</a> och Räddningsmissionen i Göteborg.<br></br>
        </b>
      </p>
      <div></div>
      <Link className="homeBtn" to="/">
        Tillbaka
      </Link>
    </div>
  );
};

export default About;
