import React from 'react';
import { navLinks } from '../constants.tsx';

interface HeaderProps {
    activeSection: string;
    scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrolled }) => {
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-sm shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-white text-glow">
                    Santanu
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`text-lg font-medium transition-colors duration-300 ${activeSection === link.id ? 'text-cyan-400 text-glow' : 'text-gray-300 hover:text-cyan-400'}`}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                 <div className="md:hidden">
                    {/* Mobile menu button can be added here */}
                </div>
            </nav>
        </header>
    );
};

export default Header;