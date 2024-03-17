'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const skills = [
    'HTML',
    'CSS',
    'Bootstrap',
    'SASS',
    'Webpack',
    'React',
    'Next.js',
    'JavaScript',
    'Redux',
    'Web Service API',
    'TypeScript',
    'Responsive Web Design',
    'UI/UX',
    'Java',
    'OOP',
    'Spring Framework',
    'MongoDB',
    'PostgreSQL',
    'Hibernate',
    'JUnit',
    'Microservice',
    'RESTful',
    'API',
    'Algorithm',
    'Design Pattern',
    'Maven',
    'ORM',
    'Jakarta EE',
    'JDBC',
    'Apache Kafka',
    'JWT',
    'Git-Github',
    'JIRA',
    'SDLC',
    'Figma',
    'Google Seo',
    'Wordpress',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'AWS',
    'Docker',
    'Scrum',
    'Postman',
];

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <div className="flex flex-wrap">
                {skills.map((skill, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3">
                        <ul className="list-disc pl-2">
                            <li>{skill}</li>
                        </ul>
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className="list-disc pl-2">
                <li>Afyon Kocatepe University</li>
                <li>BootCamp</li>
            </ul>
        ),
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className="list-disc pl-2">
                <li>
                    Full Stack Developer
                    <ol>Talentech Solutions - Internship</ol>
                </li>
                <li>
                    Full Stack Developer
                    <ol>Caltech Solutions - Internship</ol>
                </li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, setStartTransition] = useTransition();

    const handleTabChange = (id) => {
        setStartTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about-image.png"
                    width={500}
                    height={500}
                    alt="about"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4 mt-4">
                        About Me
                    </h2>
                    <p className="text-base md:text-lg">
                        I have been studying in the field of informatics for
                        about 1 year. As a result of the training I received, I
                        developed various backend and frontend projects. I used
                        the tools provided by OOP, API and Spring Framework in
                        the School-Management project, which is the backend
                        project. Tools and frameworks I use on the Frontend side
                        of the School Management project; HTML,CSS,SCSS and
                        BootStrap, React as JavaScript Framework, Context API
                        and Redux as state management and WebPack for packaging
                        Js files. I&apos;m good at writing clean, clear and readable
                        code, I learn quickly and I&apos;m good at showing off what
                        I&apos;ve learned.
                    </p>
                    <div className="flex flex-row  justify-start mt-8 ">
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('education')}
                            active={tab === 'education'}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('experience')}
                            active={tab === 'experience'}
                        >
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-8 ">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
