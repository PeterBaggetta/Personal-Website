import './Hero.css';

import linkedInPic from '../../media/linkedin.png';
import githubPic from '../../media/github.png';
import resume from '../../media/Peter_Baggetta_Resume.pdf';
import profileHero from '../../media/heroImage2.JPG';

export function Hero() {
    return (
        <>
            <section class="hero" id="home">
                <div class="container">
                    <div class="row">

                        <div class="hero-info herocol-2">
                            <h3>Hi there, I'm</h3>
                            <h1>Peter Baggetta</h1>
                            <h3>A Computer Engineer Graduate</h3>
                            <p>A Full Stack Developer, Computer Engineer & Software Developer while striving for greatness by solving one engineering problem at a time!</p>                       
                            
                            {/* Buttons on Hero */}
                            <div class="cta">
                                <ul class="hero-socials-list">
                                    <li><a href="https://www.linkedin.com/in/peter-baggetta-245867203/" target="_blank" class="social-list-item1" rel="noreferrer"><img src={linkedInPic} alt="Linkedin"/></a></li>
                                    <li><a href="https://github.com/PeterBaggetta" target="_blank" class="social-list-item1" rel="noreferrer"><img src={githubPic} alt="Github"/></a></li>
                                    <li><a href={resume} target="_blank" class="social-list-item2" rel="noreferrer">Resume</a></li>
                                    <li><a href="#contact" class="social-list-item2">Get in touch</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Hero profile image */}
                        <div class="hero-image herocol-2">
                            <div class="profile-img">
                                <img src={profileHero} alt="Profile"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}