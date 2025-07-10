import React from 'react';
import type { Project } from '../types.ts';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="group [perspective:1000px]">
            <div className="relative w-full h-96 [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                {/* Front side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden border border-gray-700 shadow-lg shadow-cyan-500/10">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 text-xs bg-cyan-800/50 text-cyan-300 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg overflow-hidden border border-cyan-500 bg-gray-900/80 backdrop-blur-md">
                    <div className="flex flex-col justify-center items-center h-full p-6 text-center">
                        <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
                        <p className="mt-4 text-gray-300 flex-grow">{project.description}</p>
                        <div className="mt-4 flex gap-4">
                            {project.source_code_link && (
                                <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                                    Source Code
                                </a>
                            )}
                            {project.live_demo_link && (
                                <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;