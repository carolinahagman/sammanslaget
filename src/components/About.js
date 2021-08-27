import "./about.css";
import AboutCards from "./AboutCards";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about---container">
            <Link className="homeBtn" to="/">
        Tillbaka
      </Link>
      <p className="introtext">
        <b>
          <br></br>En digital berättelse skapad av:
          </b><br></br>
          <br></br>Jimmy - GA
          <br></br>Johan - GP
          <br></br>Alexandra - MF
          <br></br>Malin - UX
          <br></br>Carolina - WU
          <br></br>Gilda - WU<br></br>
      <br></br>
        <b>
          Ett samarbete mellan <a href="https://www.yrgo.se/" class="yrgolink">Yrgo</a> och Räddningsmissionen i Göteborg<br></br>
        </b>
      </p>
      <div className="about-container">
      <AboutCards></AboutCards>
      </div>
      </div>
  );
};

export default About;
