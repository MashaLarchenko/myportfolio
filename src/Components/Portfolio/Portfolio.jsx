import React from "react";
import projects from "../../data/listOfProject";
import Container from "@material-ui/core/Container";
import Navigation from "../SkillsNavigation/Navigation";
import Footer from '../SkillsNavigation/Footer';
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPenAlt, faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faEarlybirds, faWolfPackBattalion } from '@fortawesome/free-brands-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import "./portfolio.css";

export default function Portfolio() {
  const imgData = [faYoutube, faPenAlt, faListAlt, faEarlybirds, faWolfPackBattalion, faPaintRoller];
  return (
    <div className='project_wrapper'>
      <Navigation />
      <Container className="projects_conteiner" maxWidth="md">
        {projects.map(project => {
          const img = imgData[project.id - 1];
          return (
            <Link to={`/portfolio/project/${project.id}`} key={project.id} className="projectItem">
              <div className='hidden_div'/>
              <div style={{padding: '10px 0', color: 'black'}}>
                {project.title}
              </div>
              <FontAwesomeIcon icon={img} style={{color: 'rgb(14, 86, 165)'}}/>
            </Link>
          );
        })}
      </Container>
     <Footer/>
    </div>
  );
}
