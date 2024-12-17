import {useEffect, useRef } from "react";
import {Orbit, SolarSystemContainer, Sun, TechLogo} from './indexStyle';
import {gsap} from "gsap";
import PHP from '../../assets/php.png';
import React from '../../assets/react.png'
import Javascript from '../../assets/javascript.png';
import Figma from '../../assets/figma.png';
import Nodejs from '../../assets/nodejs.png';
import Tailwind from '../../assets/tailwind.png';
import Docker from '../../assets/docker.png';

interface OrbitItem {
    src: string;
    alt: string;
}

const SolarSystem: React.FC = () => {
    const orbitsRef = useRef<HTMLDivElement[]>([]);

    const tecnologias: OrbitItem = [
        { src: PHP, alt: "PHP" },
        { src: React, alt: "React" },
        { src: Javascript, alt: "Javascript" },
        { src: Figma, alt: "Figma" },
        { src: Nodejs, alt: "Nodejs" },
        { src: Tailwind, alt: "Tailwind" },
        { src: Docker, alt: "Docker" },
    
    ];

    useEffect(() =>{

        orbitsRef.current.forEach((orbit, index) =>{
            gsap.to(orbit, {
                rotation: 360,
                duration: 10 + index * 2,
                repeat: -1,
                ease: "linear",
            });
        });
    }, []);

    return (

        <SolarSystemContainer>
            <Sun>
                <div>/</div>
            </Sun>
            {tecnologias.map((tech, index) =>(
                <Orbit
                    key={index}
                    ref={(el) => {
                        if (el) orbitsRef.current[index] = el;
                    }}
                >
                    <TechLogo src={tech.src} alt={tech.alt} />
                </Orbit>
            ))}
        </SolarSystemContainer>
    );
}

export default SolarSystem;