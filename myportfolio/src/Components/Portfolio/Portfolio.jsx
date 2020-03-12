import React from "react";
import projects from "../../data/listOfProject";
// import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <ul>
      {projects.map(project => {
        return <li key={project.id}>
            <Link to={`/project/${project.id}`}>{project.title}</Link>
          </li>
      })}
    </ul>
  );
}
