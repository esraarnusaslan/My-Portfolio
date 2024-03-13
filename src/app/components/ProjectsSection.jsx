import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: 'React Portfolio Website',
        description: 'Project 1 description',
        image: '/images/projects/call-tech.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 2,
        title: 'e-Commerce Website',
        description: 'Project 2 description',
        image: '/images/projects/e-commerce.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 3,
        title: 'Call-Tech Education Website',
        description: 'Project 3 description',
        image: '/images/projects/call-tech.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
];

const ProjectsSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        tag={project.tag}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectsSection;
