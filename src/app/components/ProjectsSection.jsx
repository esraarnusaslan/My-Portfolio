'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: 'React Portfolio Website',
        image: '/images/projects/portfolio.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/esraarnusaslan/My-Portfolio',
    },
    {
        id: 2,
        title: 'E-Commerce Website',
        image: '/images/projects/e-commerce.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://allovercommerce.com/',
    },
    {
        id: 3,
        title: 'Call-Tech Education Website',
        image: '/images/projects/call-tech.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://www.caltech.edu/',
    },
    {
        id: 4,
        title: 'Portfolio Website with CSS',
        image: '/images/projects/portfolio-example.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/esraarnusaslan/BOOTSTRAP/tree/main/youtube/sosyal-bilisim',
    },
    {
        id: 5,
        title: 'Cappadocia Website',
        image: '/images/projects/cappadocia.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/esraarnusaslan/CSS/blob/main/Css%20Ders/batch-153-54-178-CSS/day10/48-practice.html',
    },
    {
        id: 6,
        title: 'Coding Website',
        image: '/images/projects/coding-website.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/esraarnusaslan/BOOTSTRAP/blob/main/patika/bootstrap/demo.html',
    },
    {
        id: 7,
        title: 'Coffee Machine',
        image: '/images/projects/coffee-machine.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/esraarnusaslan/',
    },
    {
        id: 8,
        title: 'Employees Website',
        image: '/images/projects/employees.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/esraarnusaslan/JAVASCRIPT/tree/main/Practice/day05',
    },
    {
        id: 9,
        title: 'Game',
        image: '/images/projects/game.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/esraarnusaslan/JAVASCRIPT/tree/main/Practice/day08',
    },
    {
        id: 10,
        title: 'Generate Number',
        image: '/images/projects/generate-number.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/esraarnusaslan/JAVASCRIPT/tree/main/Asabeneh-Github/day23',
    },
    {
        id: 11,
        title: 'Keyboard Key Code',
        image: '/images/projects/keyboard-key-code.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/esraarnusaslan/JAVASCRIPT/tree/main/Asabeneh-Github/day23',
    },
    {
        id: 12,
        title: 'Login Website',
        image: '/images/projects/login.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/esraarnusaslan/CSS/blob/main/Css%20Practice/day04/login-form.html',
    },
    {
        id: 13,
        title: 'Medium Website',
        image: '/images/projects/medium-website.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/esraarnusaslan/BOOTSTRAP/blob/main/patika/bootstrap/medium.html',
    },
    {
        id: 14,
        title: 'Powered By Technology Website',
        image: '/images/projects/powered-by-technology.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/esraarnusaslan/BOOTSTRAP/tree/main/practice/day01',
    },
    {
        id: 15,
        title: 'Products Website',
        image: '/images/projects/products.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/esraarnusaslan/JAVASCRIPT/tree/main/Practice/day05',
    },
    {
        id: 16,
        title: 'React Pages Website',
        image: '/images/projects/react-pages.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/esraarnusaslan/React-Reducer',
    },
    {
        id: 17,
        title: 'Search For Something Website',
        image: '/images/projects/search-for-something.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/esraarnusaslan/Image-Finding-App',
    },
    {
        id: 18,
        title: 'Seat Catalog Website',
        image: '/images/projects/seat-catalog.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/esraarnusaslan/CSS/tree/main/Css%20Practice/day05',
    },
    {
        id: 19,
        title: 'Sign Up Website',
        image: '/images/projects/sign-up.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/esraarnusaslan/BOOTSTRAP/tree/main/practice/day02',
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
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            showEyeIcon={project.title !=="E-Commerce Website" && project.title !== "Call-Tech Education Website"}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
