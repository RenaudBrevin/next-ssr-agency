import React from 'react';
import ListItem from '@/components/01-atoms/scroll-item';

const ScrollList = () => {
  const projects = [
    { name: "Project 1", link: "#" },
    { name: "Project 2", link: "#" },
    { name: "Project 3", link: "#" },
    { name: "Project 4", link: "#" },
    { name: "Project 5", link: "#" },
    { name: "Project 6", link: "#" },
    { name: "Project 7", link: "#" },
  ];

  return (
    <div className="carousel-css">
      <ul className="projects-list flex gap-6 items-center mt-4">
        {projects.map((project, index) => (
          <ListItem
            key={index}
            projectName={project.name}
            projectLink={project.link}
          />
        ))}
        {projects.map((project, index) => (
          <ListItem
            key={index}
            projectName={project.name}
            projectLink={project.link}
          />
        ))}
        {projects.map((project, index) => (
          <ListItem
            key={index}
            projectName={project.name}
            projectLink={project.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default ScrollList;
