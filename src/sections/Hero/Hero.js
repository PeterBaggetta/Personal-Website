import './Hero.css';

import linkedInPic from '../../media/linkedin.png';
import githubPic from '../../media/github.png';
import resume from '../../media/Peter_Baggetta_Resume.pdf';
import profileHero from '../../media/heroImage2.JPG';

export function Hero() {
    return (
        <>
            <section className="hero" id="home">
                <div className="container">
                    <div className="row">

                        <div className="hero-info herocol-2">
                            <h3>Hi there, I'm</h3>
                            <h1>Peter Baggetta</h1>
                            <h3>Engineer, Builder & Network Architect</h3>
                            <p>I design and build reliable systems and software. From backend services to frontend UX, I ship clean code and practical solutions, while striving for greatness by solving one engineering problem at a time!</p>                       
                            
                            {/* Buttons on Hero */}
                            <div className="cta">
                                <ul className="hero-socials-list">
                                    <li><a href="https://www.linkedin.com/in/peter-baggetta-245867203/" target="_blank" className="social-list-item1" rel="noreferrer"><img src={linkedInPic} alt="Linkedin"/></a></li>
                                    <li><a href="https://github.com/PeterBaggetta" target="_blank" className="social-list-item1" rel="noreferrer"><img src={githubPic} alt="Github"/></a></li>
                                    <li><a href={resume} target="_blank" className="social-list-item2" rel="noreferrer">Resume</a></li>
                                    <li><a href="#contact" className="social-list-item2">Get in touch</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Hero profile image */}
                        <div className="hero-image herocol-2">
                            <div className="profile-img">
                                <img src={profileHero} alt="Profile"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}