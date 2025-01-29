'use client';

import { getProjectById } from '@/app/actions';
import { Project } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ListItem from '@/components/01-atoms/scroll-item';

function ProjectDetails() {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const projectData = await getProjectById(Number(id));
                setProject(projectData);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    const { context, objectives, results, technologies, imagesUrl } = project?.projectDetails || {};

    const content = `<p>${context}<br>${objectives}<br>${results}<br>${project?.description}</p>`.trim();

    if (loading) return <h1 className="text-center text-2xl font-bold text-gray-800">Loading...</h1>;
    if (!project) return <h1 className="text-center text-2xl font-bold text-red-600">Project not found</h1>;

    return (
        <div className="container my-8 flex flex-col gap-8">
            <div className="flex justify-around gap-16">
                <div className="space-y-4">
                    <h1 className="uppercase hero--title text-4xl font-bold text-gold">{project.title}</h1>
                    {
                        content && (
                            <div 
                                className="md:w-[80%]"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        )
                    }
                    <div className="flex flex-wrap gap-4">
                        {technologies?.map((tech, index) => (
                            <ListItem itemLabel={tech} key={index} />
                        ))}
                    </div>
                </div>
                <div>
                    {imagesUrl && (
                        <Image
                            className="rounded-lg shadow-md object-cover w-full"
                            src={`/${imagesUrl[0]}`}
                            alt="Illustration du projet"
                            width={300}
                            height={200}
                            priority
                        />
                    )}
                </div>
            </div>
            <div className="mt-6 flex justify-center">
                <Link
                    href={project.projectUrl}
                    className="px-6 py-3 flex gap-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition bg-lightBlack text-white"
                >
                    View project
                    <div className=" rotate-45">
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
                </Link>
            </div>
        </div>
    );
}

export default ProjectDetails;
