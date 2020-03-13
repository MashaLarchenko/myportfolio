import React from "react";
import Container from "@material-ui/core/Container";
import AboutDescription from "./AboutDesctiplion";
import Navigation from "../SkillsNavigation/SkillsNavigation";
import "./about.css";

export default function About() {
  return (
    <>
      <Container className="about_container" maxWidth="xl">
        <div className="about_txt_container">
          <h1>Hello, I'm Maria Larchenko</h1>
          <h2>Frontent Developer</h2>
        </div>
      </Container>
      <AboutDescription />
      <Navigation />
    </>
  );
}
