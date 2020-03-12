import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/listOfProject";

export default function ProjectCard() {
  const { id } = useParams();
  const index = projects.findIndex(project => project.id === +id);
  console.log(index, id);
  const project = projects[index];
  console.log(project);

  return (
    <div>
      <h3> hello {project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
