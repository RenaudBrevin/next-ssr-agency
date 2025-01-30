"use client"

import React, { useState } from 'react';
import { Project } from '@/app/types';
import ProjectCard from '@/components/01-atoms/ProjectCard';
import Filter from '@/components/01-atoms/Filter';

const ProjectsComponents = ({ projects }: { projects: Project[] }) => {
    const allTechnologies = Array.from(
        new Set(projects.flatMap(project => project.projectDetails?.technologies || []))
    );

    const allCategories = Array.from(
        new Set(projects.flatMap(project => project.projectDetails?.categories || []))
    );

    const [selectedTech, setSelectedTech] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredProjects = selectedTech
        ? projects.filter(project => project.projectDetails?.technologies.includes(selectedTech))
        : projects;

    return (
        <div>
            <div className="mb-8 flex gap-8 items-center">
                <Filter label="Technologies" options={allTechnologies} selected={setSelectedTech} selection={selectedTech} />
                <Filter label="Categories" options={allCategories} selected={setSelectedCategory} selection={selectedCategory} />
            </div>

            <div className="flex flex-wrap gap-12 justify-center">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsComponents;
