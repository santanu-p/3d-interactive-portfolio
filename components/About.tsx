
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white text-glow">About Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64">
                            <img
                                src="https://picsum.photos/seed/portfolio_avatar/400/400"
                                alt="Santanu P."
                                className="rounded-full w-full h-full object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20"
                            />
                            <div className="absolute inset-0 rounded-full border-4 border-cyan-400/50 animate-ping"></div>
                        </div>
                    </div>
                    <div className="md:w-2/3 text-lg text-gray-300 space-y-4">
                        <p>
                            Hello! I'm Santanu, a passionate developer with a love for building dynamic and user-friendly web applications. My journey into the world of code started with a simple "Hello, World!" and has since evolved into a full-blown passion for creating elegant, efficient, and scalable solutions.
                        </p>
                        <p>
                            I specialize in both front-end and back-end development, with a keen eye for UI/UX design. I believe that a great application is not just functional, but also beautiful and intuitive to use.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring the latest technology trends, contributing to open-source projects, or diving into a good sci-fi book.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
