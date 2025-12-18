import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className="navbar">
            <Link onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance("Going to Home"))} to="/">
                <img src={logo} alt="Anant Logo" className="navbar-logo" />
            </Link>
            <Link onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance("Going to Home"))} to="/" style={{ textDecoration: 'none' }}>
                <h2 className="navbar-title">ANANT's PORTFOLIO</h2>
            </Link>
            <nav className="nav-links">
                <Link onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance("Opening user's description"))} to="/about" className={isActive('/about')}>About</Link>
                <Link onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance("Opening Anant's projects"))} to="/projects" className={isActive('/projects')}>Projects</Link>
                <a onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance("Downloading Anant's resume"))} href="/resume.pdf" download>Resume</a>
            </nav>
        </header>
    );
};

export default Navbar;
