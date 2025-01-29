import React from 'react';
import Link from 'next/link';

const ListItem = ({ projectName, projectLink }) => {
  return (
    <li className="border border-gray rounded-full py-2 px-4 bg-lightBlack whitespace-nowrap">
      {projectLink ? (
        <Link href={projectLink} className="project--link flex items-center gap-2">
          <div className="bg-gold w-2 h-2 rounded-full"></div>
          {projectName}
        </Link>
      ) : (
        <p className="project--link flex items-center gap-2">
          <div className="bg-gold w-2 h-2 rounded-full"></div>
          {projectName}
        </p>
      )}
    </li>
  );
};

export default ListItem;
