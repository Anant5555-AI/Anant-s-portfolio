import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import CoderBackground from '../components/CoderBackground';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import coderImg from '../assets/coder.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const coderRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Hero Text Animation
        tl.from(".hero-text-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
        });

        // Background Parallax/Float Effect
        gsap.to(".floating-shape", {
            y: "random(-30, 30)",
            x: "random(-20, 20)",
            rotation: "random(-10, 10)",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.5
        });

        // Floating Profile Image Animation (The regular logo)
        gsap.to(".floating-profile-img", {
            y: 15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // SCROLL ANIMATION FOR CODER
        // Move from Top Right -> Middle Left -> Bottom Right
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        scrollTl
            .to(coderRef.current, {
                top: "30%",
                left: "20%",
                rotation: -10,
                scale: 1.1,
                duration: 0.5
            })
            .to(coderRef.current, {
                top: "85%", // Land near skills
                left: "75%",
                rotation: 0,
                scale: 1,
                duration: 1
            });

        // Continuous floating for the coder regardless of scroll
        gsap.to(coderRef.current, {
            y: 20,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });


        // Mouse Move Tilt Effect for Card
        const handleMouseMove = (e) => {
            if (!cardRef.current) return;

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPos = (clientX / innerWidth - 0.5);
            const yPos = (clientY / innerHeight - 0.5);

            gsap.to(cardRef.current, {
                rotationY: xPos * 10, // Tilt vertically
                rotationX: -yPos * 10, // Tilt horizontally
                transformPerspective: 900,
                transformOrigin: "center center",
                duration: 0.5,
                ease: "power1.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };

    }, { scope: containerRef });

    return (
        <main ref={containerRef} style={{ overflowX: 'hidden', position: 'relative' }}>
            {/* Floating Coder Character */}
            <img
                className="floating-coder"
                ref={coderRef}
                src={coderImg}
                alt="Coding Mascot"
            />

            <CoderBackground />
            <div className="hero-section">

                {/* Animated Background Shapes */}
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>

                <div className="hero-overlay"></div>

                <div ref={cardRef} className="hero-card" style={{
                    background: 'rgba(20, 20, 20, 0.4)', // More transparency for glass effect
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    willChange: 'transform' // Optimize for 3D
                }}>
                    <div className="hero-text-item" style={{ marginBottom: '30px' }}>
                        <img
                            src="/profile.jpg"
                            alt="Anant"
                            className="floating-profile-img"
                            style={{
                                width: '160px',
                                height: '160px',
                                borderRadius: '50%',
                                border: '4px solid var(--primary)',
                                boxShadow: '0 0 40px rgba(0, 242, 234, 0.5)',
                                objectFit: 'cover',
                                objectPosition: 'center top' // Focus on face
                            }}
                        />
                    </div>

                    <h1 className="hero-text-item" style={{
                        background: 'linear-gradient(to right, #fff, #bceaea)', // Subtle blue-white gradient
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 'clamp(40px, 5vw, 64px)', // Responsive font size
                        margin: '0 0 10px'
                    }}>
                        Hi, I’m <span style={{ color: 'var(--primary)', WebkitTextFillColor: 'var(--primary)' }}>Anant Anand</span> 👋
                    </h1>

                    <h2 className="hero-text-item" style={{ marginTop: '5px' }}>
                        <span style={{
                            color: 'var(--primary)',
                            fontSize: 'clamp(24px, 3vw, 36px)',
                            fontWeight: 'bold',
                            textShadow: '0 0 20px rgba(0, 242, 234, 0.5)'
                        }}>
                            Full Stack Web Developer
                        </span>
                    </h2>

                    <p className="hero-text-item" style={{
                        color: '#a0a0a0',
                        marginTop: '25px',
                        fontSize: 'clamp(16px, 2vw, 20px)',
                        maxWidth: '600px',
                        margin: '25px auto 0',
                        lineHeight: '1.6'
                    }}>
                        Crafting immersive digital experiences with modern web technologies and a touch of AI innovation.
                    </p>

                    <div className="hero-text-item" style={{ marginTop: '45px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a href="#skills" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('skills-section').scrollIntoView({ behavior: 'smooth' });
                        }} style={{
                            padding: '14px 35px',
                            fontSize: '18px',
                            borderRadius: '50px',
                            background: 'var(--primary)',
                            color: '#000',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            boxShadow: '0 0 20px rgba(0, 242, 234, 0.4)',
                            transition: 'transform 0.2s',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => gsap.to(e.target, { scale: 1.05, duration: 0.2 })}
                            onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.2 })}
                        >Explore My Work</a>

                        <a href="/resume.pdf" download onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance("Downloading Anant's resume"))} style={{
                            padding: '14px 35px',
                            fontSize: '18px',
                            borderRadius: '50px',
                            background: 'transparent',
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            border: '2px solid rgba(255,255,255,0.2)',
                            transition: 'all 0.2s',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'var(--primary)';
                                e.target.style.color = 'var(--primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                                e.target.style.color = '#fff';
                            }}
                        >Resume</a>
                    </div>
                </div>
            </div>

            <div id="skills-section">
                <Skills />
            </div>

            <Contact />
        </main>
    );
};

export default Home;
