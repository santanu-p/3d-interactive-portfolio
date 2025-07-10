import React from 'react';

interface SkillIconProps {
    name: string;
    icon: React.ReactNode;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, icon }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-cyan-900/20">
            <div className="w-16 h-16 text-cyan-400">{icon}</div>
            <p className="text-sm font-medium text-gray-300">{name}</p>
        </div>
    );
};

export default SkillIcon;