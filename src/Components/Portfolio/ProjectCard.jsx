import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/listOfProject";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Navigation from "../SkillsNavigation/Navigation";
import youtube from "../../assets/youtube.PNG";
import promo from "../../assets/promo.PNG";
import todo from "../../assets/todo.png";
import witcher from "../../assets/witcher.PNG";
import piskel from "../../assets/piskel.PNG";
import bird from "../../assets/bird.PNG";

export default function ProjectCard() {
  const imgData = [youtube, piskel, todo, bird, witcher, promo];

  const { id } = useParams();
  const index = projects.findIndex(project => project.id === +id);
  const project = projects[index];

  return (
    <div className='container'>
      <Navigation />
      <Container className="project_card" maxWidth="md">
        <h3 style={{textAlign:'center', fontSize: '2rem'}}>{project.title}</h3>
        <img src={`${imgData[index]}`} alt="" className='project_img'/>
        <p>{project.description}</p>
         <div>
           <Button href={project.link}>View Site</Button>
           <Button href={project.gitLink}>View code on GitHub</Button>
         </div>
      </Container>
    </div>
  );
}
