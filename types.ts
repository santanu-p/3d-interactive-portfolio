
import React from 'react';

export interface NavLink {
    id: string;
    title: string;
}

export interface Skill {
    name: string;
    icon: React.ReactNode;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    source_code_link?: string;
    live_demo_link?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}
