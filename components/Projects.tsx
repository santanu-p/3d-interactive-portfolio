
import React from 'react';
import { projects } from '../constants.tsx';
import ProjectCard from './ProjectCard.tsx';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 md:py-32 bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-white text-glow">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;