import React from 'react';
import htmlImg from '../assets/html.svg';
import cssImg from '../assets/css.svg';
import jsImg from '../assets/javascript.svg';
import tailwindImg from '../assets/tailwind.svg';
import reactImg from '../assets/react.svg';
import nextImg from '../assets/next.svg';
import pythonImg from '../assets/python.svg';
import fastApiImg from '../assets/fastapi.svg';
import azureImg from '../assets/azure.svg';

const skills = [
    { name: 'HTML', img: htmlImg },
    { name: 'CSS', img: cssImg },
    { name: 'Tailwind', img: tailwindImg },
    { name: 'JavaScript', img: jsImg },
    { name: 'React', img: reactImg },
    { name: 'Next.js', img: nextImg },
    { name: 'Python', img: pythonImg },
    { name: 'FastAPI', img: fastApiImg },
    { name: 'Azure', img: azureImg },
];

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="section-title">My Skills</div>
            {/* Container for the sliding track */}
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <div className="slider-track">
                    {/* Double the list for infinite loop effect */}
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="skill-card">
                            <img src={skill.img} alt={skill.name} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
