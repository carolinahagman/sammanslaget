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
          <h2 className="projectname">Karmens Kärlek</h2>
      <br></br>
        <b>
          En digital berättelse i samarbete mellan <br></br>studenter på <a href="https://www.yrgo.se/" class="yrgolink">Yrgo</a> och Räddningsmissionen i Göteborg
          <br></br>
        </b>
        <hr></hr>
        <br></br>Skapad av:
          </b><br></br>
      </p>
      <div className="about-container">
      <AboutCards></AboutCards>
      </div>
      </div>
  );
};

export default About;
