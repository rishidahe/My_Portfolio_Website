import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      imageUrl: "https://i.imgur.com/Pl5HzBg.jpg",
      excerpt: "This is my project about....",
    },
    {
      id: 2,
      title: "Project 2",
      imageUrl: "https://i.imgur.com/0gnwYvx.jpg",
      excerpt: "This is my project about....",
    },
    {
      id: 3,
      title: "Project 3",
      imageUrl: "https://i.imgur.com/7sbIzMt.jpg",
      excerpt: "This is my project about....",
    },
  ];
  return (
    <div className="bg-white w-100 pt-3 pb-3">
      <div className="container text-center my-5 pt-3">
        <h1 className="font-weight-light">
          My <span className="text-info"> Projects</span>
        </h1>
        <div className="lead ">I Build Products just like this Website.</div>
        <div className="row my-5 pt-3">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-4 my-2">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="my-5">
          <a href="/" className="text-dark text-right">
            <h5>
              See My Projects..
              <i className="fas fa-solid fa-circle-arrow-right align-middle"></i>
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
