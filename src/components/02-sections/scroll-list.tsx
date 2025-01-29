import React from 'react';
import ListItem from '@/components/01-atoms/scroll-item';

const ScrollList = () => {
  const competences = ['UX/UI', 'Web developpement', 'SEO', 'Communication', '3D', 'Experience', 'Logic'];

  return (
    <div className="carousel-css">
      <ul className="projects-list flex gap-6 items-center mt-4">
        {
          [...competences, ...competences].map((project, index) => (
            <ListItem key={index} itemLabel={project} />
          ))
        }
      </ul>
    </div>
  );
};

export default ScrollList;
