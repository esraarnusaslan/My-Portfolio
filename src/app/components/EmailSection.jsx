import React from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className='z-10'>
                <h5 className="text-xl font-bold text-white my-2 ">
                    Let's Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is
                    always open. Whether you have a question or just want to say
                    hi, I'll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2 ">
                    <Link
                        href="https://github.com/esraarnusaslan"
                        target="_blank"
                        className="text-[#ADB7BE] hover:text-white"
                    >
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/esraarnusaslan/"
                        target="_blank"
                        className="text-[#ADB7BE] hover:text-white"
                    >
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col ">
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium "
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="jacob@me.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block mb-2 text-sm font-medium "
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi!"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block mb-2 text-sm font-medium "
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
