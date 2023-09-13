import './Footer.css';

import linkedInFooter from '../../media/linkedin-footer.png';
import githubFooter from '../../media/github-footer.png';

export function Footer () {
    return (
        <>
            <section className="footer-area site-footer">
                <div className="container">
                    <div className="row border-bottom">

                        {/* Name & Email */}
                        <div className="footer-widget col-3-footer">
                            <div className="footer-text">
                                <h3>Peter Baggetta</h3>
                                 <p>Mailto: peter.baggetta@gmail.com</p>
                                 <p>Tel: 1+ 416-854-5405</p>
                                 <p>165 Camlaren Crescent, Vaughan, ON L4L 1A6 </p>
                            </div>
                        </div>

                        {/* Website Shortcuts */}
                        <div className="footer-links col-3-footer">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        {/* LinkedIn & Github */}
                        <div className="footer-socials col-3-footer">
                            <h3>Socials</h3>
                            <ul>
                                {/* LinkedIn */}
                                <li><a href="https://www.linkedin.com/in/peter-baggetta-245867203/" target="_blank" rel="noreferrer"><img src={linkedInFooter} className="footer-social-color" alt="Linkedin Footer logo"/></a></li>
                                {/* GitHub */}
                                <li><a href="https://github.com/PeterBaggetta" target="_blank" rel="noreferrer"><img src={githubFooter} className="footer-social-color" alt="Github Footer logo"/></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="row center">
                        <div className="footer-copyright">
                            <p>Copyright @ Peter Baggetta 2023 | All rights reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}