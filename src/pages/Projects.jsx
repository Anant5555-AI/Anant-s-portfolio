import React from 'react';

const projectsData = [
    {
        title: "Flipkart Clone",
        description: "A full-stack e-commerce web application inspired by Flipkart, built with modern web technologies.",
        codeLink: "https://github.com/Anant5555-AI/Flipkart",
        demoLink: "https://flipkart-client-1.onrender.com"
    },
    {
        title: "Entertainment App",
        description: "A full-stack Entertainment web application, built with modern web technologies.",
        codeLink: "https://github.com/Anant5555-AI/Entertainment-App-F-",
        demoLink: "https://entertainment-app-f-1.onrender.com"
    },
    {
        title: "Website Builder (Gemini API)",
        description: "A full-stack web application that uses Gemini API to help build websites.",
        codeLink: "https://github.com/Anant5555-AI/Website-Builder-using-gemini-api-",
        demoLink: "https://website-builder-using-gemini-api.onrender.com"
    },
    {
        title: "Real-Time Chat App",
        description: "A secure full-stack chat application featuring real-time messaging, end-to-end encryption, and cross-platform support.",
        codeLink: "https://github.com/Anant5555-AI/My-chat-app",
        demoLink: "https://my-chat-app-1kbx.onrender.com",
        apkLink: "https://expo.dev/artifacts/eas/j13gUHCcRj75XywvWQ7BYA.apk"
    }
];

const Projects = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '80vh', paddingBottom: '50px' }}>
            <div className="section-title">My Projects</div>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px'
            }}>
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card" style={{
                        background: 'rgba(20, 20, 20, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '15px',
                        padding: '30px',
                        transition: 'transform 0.3s ease, border-color 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <h3 style={{ color: 'var(--primary)', marginTop: 0, fontSize: '24px' }}>{project.title}</h3>
                        <p style={{ color: '#ccc', flexGrow: 1, lineHeight: '1.6' }}>{project.description}</p>

                        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={{
                                flex: 1,
                                textAlign: 'center',
                                padding: '10px',
                                borderRadius: '8px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'white',
                                textDecoration: 'none',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'var(--primary)';
                                    e.currentTarget.style.color = 'black';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.color = 'white';
                                }}>
                                View Code
                            </a>
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{
                                flex: 1,
                                textAlign: 'center',
                                padding: '10px',
                                borderRadius: '8px',
                                background: 'rgba(0, 255, 255, 0.1)',
                                color: 'var(--primary)',
                                textDecoration: 'none',
                                border: '1px solid var(--primary)',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'var(--primary)';
                                    e.currentTarget.style.color = 'black';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)';
                                    e.currentTarget.style.color = 'var(--primary)';
                                }}>
                                Live Demo
                            </a>
                            {project.apkLink && (
                                <a href={project.apkLink} download style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    background: 'rgba(50, 205, 50, 0.1)', // Green tint
                                    color: '#32cd32',
                                    textDecoration: 'none',
                                    border: '1px solid #32cd32',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px' // Slightly smaller text if needed to fit
                                }}
                                    title="Download and install on your phone"
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = '#32cd32';
                                        e.currentTarget.style.color = 'black';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(50, 205, 50, 0.1)';
                                        e.currentTarget.style.color = '#32cd32';
                                    }}>
                                    Download APK (Mobile)
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
