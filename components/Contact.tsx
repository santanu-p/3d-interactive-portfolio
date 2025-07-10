import React from 'react';
import { socialLinks } from '../constants.tsx';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4 text-white text-glow">Get In Touch</h2>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                    I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to connect, or just want to say hi!
                </p>
                <a href="mailto:santanu.p@example.com" className="inline-block px-10 py-4 mb-12 bg-cyan-500 text-black font-bold rounded-full text-xl hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                    Say Hello
                </a>
                <div className="flex justify-center gap-6 mt-8">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                            <div className="w-8 h-8">{link.icon}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;