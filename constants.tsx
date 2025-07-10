import React from 'react';
import type { NavLink, Skill, Project, SocialLink } from './types.ts';

// Icons as JSX elements
const GithubIcon = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
const LinkedinIcon = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>;
const TwitterIcon = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085a4.93 4.93 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.547 2.219c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
const ReactIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor"><title>React</title><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>;
const NodeIcon = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Node.js</title><path d="M11.996 0a1.524 1.524 0 00-1.375.76l-9 15.588A1.523 1.523 0 002.996 18h18a1.524 1.524 0 001.375-2.288l-9-15.588A1.524 1.524 0 0011.996 0zm-.123 2.16c.333 0 .654.144.862.408l7.95 13.776H4.31l7.95-13.776a1.13 1.13 0 01.613-.408zM9.43 8.812l-1.353.916a.35.35 0 00-.14.416l1.353 2.344a.35.35 0 00.416.14l1.353-.916a.35.35 0 00.14-.416l-1.353-2.344a.35.35 0 00-.416-.14zm5.832 2.748l-1.353.916a.35.35 0 00-.14.416l1.353 2.344a.35.35 0 00.416.14l1.353-.916a.35.35 0 00.14-.416l-1.353-2.344a.35.35 0 00-.416-.14zM8.528 17.923a1.125 1.125 0 01-.975-1.688l5.25-9.094a1.125 1.125 0 011.95.002l5.25 9.092a1.125 1.125 0 11-1.95 1.126L13.23 9.4l-4.702 8.145a1.125 1.125 0 01-.975.378z"/></svg>;

export const navLinks: NavLink[] = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
];

export const skills: Skill[] = [
    { name: 'React', icon: ReactIcon },
    { name: 'TypeScript', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>TypeScript</title><path d="M1.5 0 h21 v21 h-21 z" fill="#3178c6" /><path d="M12.13 10.36H9.94v6.86h-2.5V10.36H5.25v-2.3h6.88v2.3zM18.6 12.68c0 1.9-1.2 3.17-3.14 3.17-1.93 0-3.14-1.27-3.14-3.17s1.2-3.17 3.14-3.17c1.93 0 3.14 1.27 3.14 3.17zm-3.14-.98c-.56 0-.88.4-.88.98s.32.98.88.98c.55 0 .88-.4.88-.98s-.33-.98-.88-.98z"/></svg> },
    { name: 'Node.js', icon: NodeIcon },
    { name: 'JavaScript', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.472-1.365-1.548-2.4-2.82-2.887-1.272-.488-2.61-.488-3.72 0-1.11.488-2.07 1.41-2.52 2.61-.45 1.2-.45 2.887 0 4.087.45 1.2 1.41 2.122 2.52 2.61s2.448.488 3.72 0c1.272-.488 2.348-1.522 2.82-2.887.472-1.365.472-3.12 0-4.545zM9.35 18.276c-.472-1.365-1.548-2.4-2.82-2.887-1.272-.488-2.61-.488-3.72 0-1.11.488-2.07 1.41-2.52 2.61-.45 1.2-.45 2.887 0 4.087.45 1.2 1.41 2.122 2.52 2.61s2.448.488 3.72 0c1.272-.488 2.348-1.522 2.82-2.887.472-1.365.472-3.12 0-4.545z"/></svg> },
    { name: 'Tailwind CSS', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.173,1.194,2.534,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg> },
    { name: 'Figma', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Figma</title><path d="M12 0H0v24h12V12h6V6h-6z" fill="#0acf83"/><path d="M6 12a6 6 0 116 6 6 6 0 01-6-6z" fill="#a259ff"/><path d="M6 0v12a6 6 0 110-12z" fill="#f24e1e"/><path d="M6 6a6 6 0 116 6 6 6 0 01-6-6z" fill="#ff7262"/><path d="M12 12a6 6 0 116 6 6 6 0 01-6-6z" fill="#1abcfe"/></svg> },
];

export const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process, built with the MERN stack.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        image: "https://picsum.photos/seed/project1/600/400",
        source_code_link: "https://github.com",
        live_demo_link: "https://github.com",
    },
    {
        title: "AI Chat Application",
        description: "A real-time chat app powered by Gemini API, allowing users to have intelligent conversations with an AI assistant.",
        tags: ["React", "Gemini API", "Tailwind CSS", "Firebase"],
        image: "https://picsum.photos/seed/project2/600/400",
        source_code_link: "https://github.com",
        live_demo_link: "https://github.com",
    },
    {
        title: "Data Visualization Dashboard",
        description: "An interactive dashboard for visualizing complex datasets using D3.js and React, offering insightful charts and graphs.",
        tags: ["React", "D3.js", "TypeScript", "Next.js"],
        image: "https://picsum.photos/seed/project3/600/400",
        source_code_link: "https://github.com",
        live_demo_link: "https://github.com",
    },
];

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/santanu-p',
        icon: GithubIcon,
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: LinkedinIcon,
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: TwitterIcon,
    },
];