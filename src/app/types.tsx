export type Project = {
    id: number;
    title: string;
    description: string;
    projectUrl: string;
    projectDetails?: ProjectDetails | null;
};

export type ProjectDetails = {
    id: number;
    context: string;
    objectives: string;
    results: string;
    technologies: string[];
    imagesUrl: string[];
    categories: string[];
    project?: Project | null;
    projectId?: number | null;
};

export type Contact = {
    id: number;
    name: string;
    message: string;
    email: string;
};