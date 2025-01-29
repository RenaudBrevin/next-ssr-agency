import React from 'react';
import { Project } from '../../app/types';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: Project }) => {

    return (
        <Link
            href={`/projects/${project.id}`}
            className="border border-gold rounded-md shadow-md flex flex-col aspect-square bg-cover justify-end w-64 overflow-hidden"
            style={project.projectDetails ? {
                backgroundImage: `url(${project.projectDetails.imagesUrl[0]})`
            } : undefined}
        >
            <div
                className="bg-black bg-opacity-60 w-full h-16 flex items-center justify-evenly text-white text-center"
            >
                <span className='text-sm font-bold w-[70%] text-left'>{project.title}</span>
                <div className="contact rounded-full border border-gold bg-lightBlack p-2 rotate-45 hover:bg-gold transition-colors duration-300 ease-in-out group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="#FFD700"
                            className="group-hover:stroke-black transition-colors duration-300 ease-in-out"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 20V4m-7 7l7-7l7 7"
                        />
                    </svg>
                </div>
            </div>
        </Link >
    );
};

export default ProjectCard;
