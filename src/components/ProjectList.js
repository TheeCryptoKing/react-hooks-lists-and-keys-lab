import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  //confused on how to go out the process here
  //projects and ProjectList used here for input
  //app or liveserver wont help us so concpets and syntax need to be solidified for test
  // const renderP = ProjectItem.map ((projects) => {return <h1 key={projects.id}>{projects}</h1>}); my intial function 

  const projectItems = projects.map((project) => {
  return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>;
  })
  //calling on ProjectItem formated the data from the array then assigned all the elements tag to be called in  the array individually
  //remeber map and foreach, go threw every index of array and return a element one by one. they are your best friends. get comfortable with them.

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ projectItems
        /* render ProjectItem components here */
      }</div>
    </div>
  );
}

export default ProjectList;

