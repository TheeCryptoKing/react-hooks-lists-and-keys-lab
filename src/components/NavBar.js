import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];  
  //all elements exist need to go through array but not change it .map or .foreach
  //regular anchors work but i dont think that is the point
  const newLinks = links.map((link) => { 
    return <a key={link} href={'#'+link}>{link}</a>
  })
  // created an array that was dependent on posiiton in map() for its index 

  return (
  <nav>
  {/* <a key='home' href="#home">home</a>
  <a key='about'href="#about">about</a>
  <a key='projects'href="#projects">projects</a> */}
  {/* this way only created anchors didnt go through links array */}
  {newLinks}
  </nav>
  );
}

export default NavBar;

