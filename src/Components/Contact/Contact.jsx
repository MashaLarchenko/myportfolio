import React from "react";
import Footer from "../SkillsNavigation/Footer";
import Navigation from "../SkillsNavigation/Navigation";
import Container from "@material-ui/core/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import photo from "../../assets/photo.jpeg";
import "./contact.css";

export default function Contact() {
  return (
    <div className="wrapper">
      <Navigation />
      <Container maxWidth="md" className="contact_container">
        <img src={photo} alt="myPhoto" className="myphoto" />
        <div>
          <h5>Thank you for pay attention to my portfolio</h5>
          <p>If you like it feel free to contact me</p>
          <ul className="contact_list">
            <li> 
            <FontAwesomeIcon icon={faPhone} />
              Phone: +375445585678</li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
              <a href="https://www.linkedin.com/in/maria-larchenko-b990ab138/">
                LinkedIn
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGoogle} />
              <a href="mailto: mashalarchenko16@gmail.com">Gmail</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/MashaLarchenko">Github</a>
            </li>
          </ul>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
