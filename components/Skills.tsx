
import React from 'react';
import { skills } from '../constants.tsx';
import SkillIcon from './SkillIcon.tsx';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-white text-glow">My Tech Arsenal</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {skills.map((skill) => (
                        <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;