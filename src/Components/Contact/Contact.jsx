import React from "react";
import Footer from "../SkillsNavigation/Footer";
import Navigation from "../SkillsNavigation/Navigation";
import Container from "@material-ui/core/Container";

import photo from "../../assets/photo.png";
import "./contact.css";

export default function Contact() {
  return (
    <div className="wrapper">
      <Navigation/>
      <Container maxWidth='md' className='contact_container'>
        <img src={photo} alt="myPhoto" className="myphoto" />
        <h5>Thank you for pay attention to my portfolio</h5>
        <p>If you like it feel free to contact me</p>
        <ul className='contact_list'>
          <li>LinkedIn</li>
          <li>Gmail</li>
        </ul>
      </Container>
      <Footer />
    </div>
  );
}
