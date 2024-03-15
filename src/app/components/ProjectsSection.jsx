'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: 'React Portfolio Website',
        description: 'Project 1 description',
        image: '/images/projects/portfolio.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 2,
        title: 'E-Commerce Website',
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
    {
        id: 4,
        title: 'Portfolio Website with CSS',
        description: 'Project 4 description',
        image: '/images/projects/portfolio-example.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 5,
        title: 'Cappadocia Website',
        description: 'Project 5 description',
        image: '/images/projects/cappadocia.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 6,
        title: 'Coding Website',
        description: 'Project 6 description',
        image: '/images/projects/coding-website.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 7,
        title: 'Coffee Machine',
        description: 'Project 7 description',
        image: '/images/projects/coffee-machine.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 8,
        title: 'Employees Website',
        description: 'Project 8 description',
        image: '/images/projects/employees.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 9,
        title: 'Game',
        description: 'Project 9 description',
        image: '/images/projects/game.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 10,
        title: 'Generate Number',
        description: 'Project 10 description',
        image: '/images/projects/generate-number.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 11,
        title: 'Keyboard Key Code',
        description: 'Project 11 description',
        image: '/images/projects/keyboard-key-code.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 12,
        title: 'Login Website',
        description: 'Project 12 description',
        image: '/images/projects/login.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 13,
        title: 'Medium Website',
        description: 'Project 13 description',
        image: '/images/projects/medium-website.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 14,
        title: 'Powered By Technology Website',
        description: 'Project 14 description',
        image: '/images/projects/powered-by-technology.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 15,
        title: 'Products Website',
        description: 'Project 15 description',
        image: '/images/projects/products.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 16,
        title: 'React Pages Website',
        description: 'Project 16 description',
        image: '/images/projects/react-pages.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 17,
        title: 'Search For Something Website',
        description: 'Project 17 description',
        image: '/images/projects/search-for-something.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 18,
        title: 'Seat Catalog Website',
        description: 'Project 18 description',
        image: '/images/projects/seat-catalog.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 19,
        title: 'Sign Up Website',
        description: 'Project 19 description',
        image: '/images/projects/sign-up.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState('All');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === 'All'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === 'Web'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === 'Mobile'}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
