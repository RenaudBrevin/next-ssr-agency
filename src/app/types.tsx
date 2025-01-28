export type Project = {
    id: number;
    title: string;
    description: string;
    projectUrl: string;
    projectDetails?: ProjectDetails;
};

export type ProjectDetails = {
    id: number;
    context: string;
    objectives: string;
    technologies: string[];
    imagesUrl: string[];
    project?: Project;
    projectId?: number;
};

export type Contact = {
    id: number;
    name: string;
    message: string;
    email: string;
};