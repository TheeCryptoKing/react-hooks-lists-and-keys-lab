import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
  const renderP = ProjectItem.map ((projects) => {return <h1 key={projects.id}>{ProjectItem}</h1>}); 


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        /* render ProjectItem components here */
       renderP
      }</div>
    </div>
  );
}

export default ProjectList;
