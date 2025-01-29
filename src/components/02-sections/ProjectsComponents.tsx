import React from 'react';
import { Project } from '../../app/types';
import ProjectCard from '@/components/01-atoms/ProjectCard';

const ProjectsComponents = ({ projects }: { projects: Project[] }) => {
    return (
        <div className="flex flex-wrap gap-12">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
    )
};

export default ProjectsComponents;