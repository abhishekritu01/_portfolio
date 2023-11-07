import React from 'react';

const About = () => {
    return (
        <div className="relative">
            <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 hidden md:block">
                <img
                    src="/mainIcons.svg" // Replace with your image URL
                    alt="Workspace"
                    className="w-full h-full object-cover object-center  shadow-2xl ring-1 ring-white/10"
                />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Frontend Developer at Newron.ai</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Abhishek - Crafting Digital Experiences</p>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                        Hi there! I&apos;m Abhishek, a passionate frontend developer at Newron.ai. I specialize in creating engaging and user-friendly web applications that bring ideas to life. With a strong foundation in modern web technologies and a keen eye for design, I transform concepts into functional and responsive digital experiences.

                        My journey in the world of web development is driven by a commitment to delivering innovative solutions and enhancing user interactions. Whether it&apos;s building sleek user interfaces or optimizing performance, I&apos;m dedicated to ensuring top-notch quality in every project.

                        Feel free to explore my work and don&apos;t hesitate to reach out if you have any questions or collaboration opportunities. Let&apos;s create amazing web experiences together!
                    </p>
                    <div className="mt-8">
                        <a
                            href="#"
                            className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
