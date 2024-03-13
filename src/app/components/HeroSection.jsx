'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello I'm
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Esra',
                                1000,
                                'Full Stack Java Developer',
                                1000,
                                'Frontend Developer',
                                1000,
                                'Backend Developer',
                                1000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>

                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 via-primary-500 to-blue-500 text-white">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white  mt-3 ">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/images/hero-image.png"
                            alt="hero image"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
