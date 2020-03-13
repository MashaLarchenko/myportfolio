import React from "react";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";
import "./about.css";

export default function AboutDescription() {
  return (
    <Container maxWidth="md" className="descContainer">
      <Fade top>
        <p className="description_text">
          I am a web developer with more than one year of experience. I
          constantly learning new technologies in web development. I want to
          become an exellent Frontend Developer. I do my job well because I like
          what I do.
        </p>
      </Fade>
    </Container>
  );
}
