import React from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import projects from "../../data/listOfProject";
import Container from "@material-ui/core/Container";
import Footer from '../SkillsNavigation/Footer';
import Button from "@material-ui/core/Button";
import Navigation from "../SkillsNavigation/Navigation";
import youtube from "../../assets/youtube.jpeg";
import promo from "../../assets/promo.jpeg";
import todo from "../../assets/todo.jpeg";
import witcher from "../../assets/witcher-min.jpeg";
import astronomy from "../../assets/astronomy.PNG";
import bird from "../../assets/bird.jpeg";

export default function ProjectCard() {
  const imgData = [youtube, astronomy, todo, bird, witcher, promo];

  const { id } = useParams();
  const index = projects.findIndex(project => project.id === +id);
  const project = projects[index];

  return (
    <div className='container'>
      <Navigation />
      <Container className="project_card" maxWidth="lg">
        <h3 style={{ textAlign: 'center', fontSize: '2rem' }}>{project.title}</h3>
        <div className='project_info' style={{ backgroundImage: `url(${imgData[index]})` }}>
          {/* <LazyLoadImage src={imgData[index]} alt="" className='project_img' /> */}
          <p className='hover_info'>{project.description}</p>
          <div className='linkBtn_container hover_info'>
            <Button href={project.link} className='linkBtn' variant="contained">View Site</Button>
            <Button href={project.gitLink} className='linkBtn' variant="contained">View code on GitHub</Button>
          </div>
        </div>


      </Container>
      <Footer />
    </div>
  );
}
