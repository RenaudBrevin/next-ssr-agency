import React from 'react';
import ListItem from '@/components/01-atoms/scroll-item';

const ScrollList = () => {
  const projects = [
    { name: "UX/UI", link: "#" },
    { name: "Web developpement", link: "#" },
    { name: "SEO", link: "#" },
    { name: "Communication", link: "#" },
    { name: "3D", link: "#" },
    { name: "Experience", link: "#" },
    { name: "Logic", link: "#" },
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
