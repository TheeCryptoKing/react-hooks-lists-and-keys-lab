import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  // const colorElements = colors.map((color) => {
  //   return <ColorItem key={color} color={color} />;
  // });
const idk = technologies.map((tech) => {return <span key={tech}>{tech}</span>
})

return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {/* <span>{technologies[0]}</span>
        <span>{technologies[1]}</span>
        <span>{technologies[3] || technologies === '' }</span> */}
        {idk}

      </div>
    </div>
  );
}

export default ProjectItem;
