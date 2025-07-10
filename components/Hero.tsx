import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const heroElement = heroRef.current;
        if (!heroElement) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = heroElement.getBoundingClientRect();

            const x = clientX - left;
            const y = clientY - top;

            const xRotation = (y / height - 0.5) * -25;
            const yRotation = (x / width - 0.5) * 25;

            heroElement.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.05, 1.05, 1.05)`;
        };

        const handleMouseLeave = () => {
            heroElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        };
        
        heroElement.addEventListener('mousemove', handleMouseMove);
        heroElement.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove);
                heroElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };

    }, []);

    return (
        <section id="home" className="h-screen flex items-center justify-center text-center relative [perspective:1000px]">
             <div ref={heroRef} className="z-10 flex flex-col items-center transition-transform duration-100 ease-out [transform-style:preserve-3d]">
                <h1 className="text-5xl md:text-7xl font-black uppercase text-white tracking-wider">
                    Santanu P.
                </h1>
                <p className="mt-4 text-xl md:text-3xl font-light text-cyan-300 animate-pulse text-glow">
                    Full-Stack Developer & UI/UX Enthusiast
                </p>
                <p className="mt-6 max-w-2xl text-gray-400 text-lg md:text-xl">
                    I bring ideas to life with immersive and beautiful web experiences.
                </p>
                <a
                    href="#projects"
                    className="mt-10 px-8 py-3 bg-cyan-500 text-black font-bold rounded-full text-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
                >
                    View My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;