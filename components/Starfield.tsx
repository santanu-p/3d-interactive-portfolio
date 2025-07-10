import React, { useRef, useEffect } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

const Starfield: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: Infinity, y: Infinity });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;
        };
        const handleMouseLeave = () => {
            mouse.current.x = Infinity;
            mouse.current.y = Infinity;
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const particles: Particle[] = [];
        const numParticles = Math.floor(width / 25);
        const connectDistance = 120;
        const mouseConnectDistance = 150;

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5 + 1,
            });
        }

        let animationFrameId: number;
        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 1)';
            ctx.fillRect(0,0,width,height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectDistance) {
                        const opacity = 1 - dist / connectDistance;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(0, 192, 255, ${opacity * 0.5})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
                 const dxMouse = particles[i].x - mouse.current.x;
                 const dyMouse = particles[i].y - mouse.current.y;
                 const distMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
                 if (distMouse < mouseConnectDistance) {
                     const opacity = 1 - distMouse / mouseConnectDistance;
                     ctx.beginPath();
                     ctx.moveTo(particles[i].x, particles[i].y);
                     ctx.lineTo(mouse.current.x, mouse.current.y);
                     ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.7})`;
                     ctx.lineWidth = 1.2;
                     ctx.stroke();
                 }
            }
            
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default Starfield;