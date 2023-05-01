import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// import React from "react";

// function NavBar() {
//   const links = ["home", "about", "projects"];
//   const linkA = links.map((link) => {
//     return <a key={link} href={"#" + link}>{link}</a>
//   })
//   return <nav>{linkA}</nav>;
// }
//had to learn method. Blanket map function but the link object is index for all these points in the array thus goign through home and about and project individually and using them as the key, href, and text content. {'#' + link} is just adding the string to a # to use as a anchor and doing so for every element in array
// export default NavBar;

// function ProjectItem({ name, about, technologies }) {

//   const projectTech = technologies.map((tech) => {
//     return <span key={tech}>{tech}</span>
//   })

//   return (
//     <div className="project-item">
//       <h3>{name}</h3>
//       <p>{about}</p>
//       <div className="technologies">
//         {projectTech}
//       </div>
//     </div>
//   );
// } already did this wont load

// export default ProjectItem;

// import React from "react";
// import ProjectItem from "./ProjectItem";

// function ProjectList({ projects }) {
//   console.log(projects);
//   const projectData = projects.map((project) => {
//     return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>;
//   })
//   return (
//     <div id="projects">
//       <h2>My Projects</h2>
//       <div id="project-list">{projectData}</div>
//     </div>
//   );
// }

// export default ProjectList;


//start using what is provided and stop focusing on what you dont know, because you have more than enough capability and intelligence to solve and surpass it - kwame