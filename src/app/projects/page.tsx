import { getProjects } from '@/app/actions';
import { Project } from '@/app/types';
import ProjectsComponents from '@/components/02-sections/ProjectsComponents';

async function Projects() {
    const projects = await getProjects();
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