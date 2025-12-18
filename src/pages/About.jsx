import React from 'react';

const About = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '80vh', paddingBottom: '50px' }}>
            <div className="section-title">About Me</div>

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '40px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                lineHeight: '1.8'
            }}>
                <p style={{ fontSize: '18px', color: '#e0e0e0', marginBottom: '20px' }}>
                    I’m <strong style={{ color: 'var(--primary)' }}>Anant Anand</strong>, a web development enthusiast currently enrolled at <strong style={{ color: 'var(--primary)' }}>AlmaBetter</strong>. I love learning about new technologies and building scalable products.
                </p>
                <p style={{ fontSize: '18px', color: '#e0e0e0', marginBottom: '60px' }}>
                    I'm passionate about leveraging technology to solve real-world problems.
                </p>

                {/* Timeline Section */}
                <h3 style={{ color: 'var(--primary)', marginBottom: '40px' }}>Experience & Education</h3>
                <div style={{ position: 'relative', textAlign: 'left', paddingLeft: '20px' }}>

                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '10px',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--primary), transparent)',
                        borderRadius: '2px'
                    }}></div>

                    {/* Item 1: AlmaBetter Trainee */}
                    <div className="timeline-item" style={{ marginBottom: '40px', paddingLeft: '25px', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', left: '-5px', top: '5px', width: '12px', height: '12px',
                            borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)'
                        }}></div>
                        <h4 style={{ margin: '0 0 5px', fontSize: '20px' }}>Full Stack Web Development Trainee</h4>
                        <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: 'bold' }}>AlmaBetter</span>
                        <span style={{ color: '#888', fontSize: '14px', marginLeft: '10px' }}>Sep 2024 - Present</span>
                        <p style={{ color: '#ccc', margin: '10px 0', fontSize: '15px' }}>
                            Completed a full-time training program in Full Stack Web Development. <br />
                            <em style={{ fontSize: '13px', color: '#888' }}>Skills: Large Language Models (LLM), LangChain.js</em>
                        </p>
                    </div>

                    {/* Item 2: UPSC Prep */}
                    <div className="timeline-item" style={{ marginBottom: '40px', paddingLeft: '25px', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', left: '-5px', top: '5px', width: '12px', height: '12px',
                            borderRadius: '50%', background: 'var(--secondary)', boxShadow: '0 0 10px var(--secondary)'
                        }}></div>
                        <h4 style={{ margin: '0 0 5px', fontSize: '20px' }}>Independent Researcher | UPSC Prep</h4>
                        <span style={{ color: '#fff', fontSize: '14px' }}>Union Public Service Commission</span>
                        <span style={{ color: '#888', fontSize: '14px', marginLeft: '10px' }}>Jul 2023 - Aug 2024</span>
                        <p style={{ color: '#ccc', margin: '10px 0', fontSize: '15px' }}>
                            Dedicated one year to rigorous Civil Services preparation, developing skills in critical thinking and problem-solving.<br />
                            <em style={{ fontSize: '13px', color: '#888' }}>Skills: Critical Thinking, Problem Solving</em>
                        </p>
                    </div>

                    {/* Item 3: AlmaBetter Internship */}
                    <div className="timeline-item" style={{ marginBottom: '40px', paddingLeft: '25px', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', left: '-5px', top: '5px', width: '12px', height: '12px',
                            borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px #fff'
                        }}></div>
                        <h4 style={{ margin: '0 0 5px', fontSize: '20px' }}>Internship (Frontend)</h4>
                        <span style={{ color: '#fff', fontSize: '14px' }}>AlmaBetter</span>
                        <span style={{ color: '#888', fontSize: '14px', marginLeft: '10px' }}>Jan 2023 - Jun 2023</span>
                        <p style={{ color: '#ccc', margin: '10px 0', fontSize: '15px' }}>
                            Developed the frontend for an AI-powered chatbot, integrating seamless user interaction with a clean UI.<br />
                            <em style={{ fontSize: '13px', color: '#888' }}>Skills: React.js, Tailwind CSS</em>
                        </p>
                    </div>

                    {/* Item 4: IIT Kharagpur */}
                    <div className="timeline-item" style={{ paddingLeft: '25px', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', left: '-5px', top: '5px', width: '12px', height: '12px',
                            borderRadius: '50%', background: '#888', boxShadow: '0 0 10px #888'
                        }}></div>
                        <h4 style={{ margin: '0 0 5px', fontSize: '20px' }}>Project Intern</h4>
                        <span style={{ color: '#fff', fontSize: '14px' }}>Indian Institute of Technology, Kharagpur</span>
                        <span style={{ color: '#888', fontSize: '14px', marginLeft: '10px' }}>Sep 2019 - Nov 2019</span>
                        <p style={{ color: '#ccc', margin: '10px 0', fontSize: '15px' }}>
                            Developed a finite element analysis solution using numerical methods to simulate structural behavior.<br />
                            <em style={{ fontSize: '13px', color: '#888' }}>Skills: Finite Element Analysis (FEA)</em>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
