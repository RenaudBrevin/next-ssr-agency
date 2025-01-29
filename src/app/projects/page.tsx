import React from 'react';
import { Project } from '../../app/types';
import { PrismaClient } from '@prisma/client'
import ProjectsComponents from '@/components/02-sections/ProjectsComponents';

const prisma = new PrismaClient();

async function Projects() {
    const projects = await prisma.project.findMany({
        include: {
            projectDetails: true
        }
    });

    console.log(projects);

    return (
        <div className="container my-8 flex flex-col gap-8">
            <h1 className='text-center uppercase hero--title text-4xl font-bold'>
                Our lastest <span className='text-gold'>creations</span>
            </h1>
            <ProjectsComponents projects={projects as Project[]} />
        </div>
    );
}

export default Projects;