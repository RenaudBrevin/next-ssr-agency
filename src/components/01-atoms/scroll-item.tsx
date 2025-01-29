import React from 'react';

// List Item Component
const ListItem = ({ projectName, projectLink }) => {
  return (
    <li className="border border-gray rounded-full py-2 px-4 bg-lightBlack whitespace-nowrap">
      <a href={projectLink} className="project--link">
        {projectName}
      </a>
    </li>
  );
};

export default ListItem;
