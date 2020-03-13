import React from "react";
import projects from "../../data/listOfProject";
import Container from "@material-ui/core/Container";
import Navigation from "../SkillsNavigation/Navigation";
import { Link } from "react-router-dom";
import "./portfolio.css";
import youtube from "../../assets/youtube.jpg";
import todo from "../../assets/todo.png";
import witcher from "../../assets/witcher.jpg";
import piskel from "../../assets/piskel.jpg";
import bird from "../../assets/bird.jpg";

export default function Portfolio() {
  const imgData = [youtube, piskel, todo, bird, witcher, witcher];
  return (
    <>
      <Navigation />
      <Container className="projects_conteiner" maxWidth="md">
        {projects.map(project => {
          const img = imgData[project.id - 1];
          return (
            <Link to={`/project/${project.id}`} className="projectItem" style={{ backgroundImage: `url(${img})`}}>
              <div
                key={project.id}
              >
                {project.title}
                {/* <img src={imgData[project.id - 1]} alt=""/> */}
              </div>
            </Link>
          );
        })}
      </Container>
    </>
  );
}
