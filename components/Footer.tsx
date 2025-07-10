
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 bg-gray-900/50 text-center text-gray-500">
            <div className="container mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} Santanu P. All rights reserved.</p>
                 <p className="text-xs mt-1">Inspired design for a modern web presence.</p>
            </div>
        </footer>
    );
};

export default Footer;
