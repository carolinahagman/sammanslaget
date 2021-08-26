import "./about.css";
import AboutCards from "./AboutCards";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about-container">
                       <div></div>
            <p>
            Ett samarbete mellan Yrgo och Räddningsmissionen i Göteborg<br></br>
            En digital berättelse skapad av:
            </p>
            <div></div>
            <AboutCards></AboutCards>
            <Link className="homeBtn" to="/">
            Back
          </Link>
        </div>
        
    );
};

export default About;