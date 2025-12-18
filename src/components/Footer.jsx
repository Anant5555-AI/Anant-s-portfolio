import React from 'react';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

const Footer = () => {
    return (
        <footer className="modern-footer">
            <div className="footer-content">
                <div className="footer-header">
                    <h2 className="footer-title">Let's Connect</h2>
                    <p className="footer-subtitle">Reach out for collaborations or just a friendly hello</p>
                </div>

                <div className="social-links-container">
                    <a href="https://www.linkedin.com/in/anant-anand-975247193" target="_blank" rel="noopener noreferrer" className="social-card">
                        <img src={linkedinIcon} alt="LinkedIn" />
                        <span>LinkedIn</span>
                    </a>

                    <a href="mailto:anantanand900@gmail.com" className="social-card">
                        <span style={{ fontSize: '24px' }}>📧</span>
                        <span>Email</span>
                    </a>

                    <a href="https://github.com/Anant5555-AI" target="_blank" rel="noopener noreferrer" className="social-card">
                        <img src={githubIcon} alt="GitHub" className="github-icon" />
                        <span>GitHub</span>
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Anant Anand. Crafted with <span style={{ color: 'var(--secondary)' }}>❤</span> & React.</p>
                </div>
            </div>

            {/* Decorative background glow */}
            <div className="footer-glow"></div>
        </footer>
    );
};

export default Footer;
