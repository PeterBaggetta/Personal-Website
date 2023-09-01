import './Projects.css';

// Project images
import CBCEncryption from'../../media/Project-CBC_Encryption.png';
import passwordManager from'../../media/Project-Password-Manager.png';
import websitePortfolio from'../../media/Project-Website-Portfolio.png';

// Technologies Used logos
import C from '../../media/C.png';
import Git from '../../media/git.png';
import Verilog from '../../media/systemverilog.png';
import Python from '../../media/python.png';
import HTML5 from '../../media/html5.png';
import CSS3 from '../../media/css3.png';
import React from '../../media/react.png';
import JavaScript from '../../media/javascript.png';

export function Projects () {
    return (
        <>
            <section class="projects" id="projects">
                <div class="container">
                    <h2>Projects</h2>
                    {/* Project 1 */}
                    <div class="row">
                        <div class="project-info col-2">
                            <h3>AES Encryption Coprocessor</h3>
                            <ul>
                                <li> &#8226; Implemented an AES coprocessor on a DE1-Soc development board.</li>
                                <li> &#8226; Created a APB IP module to interface between the hardware on the FPGA and software on the host computer.</li>
                                <li> &#8226; Software and hardware are coded with System Verilog and C for command line interaction.</li>
                            </ul>
                            <h4>Technologies Used:</h4>
                            {/* C */}
                            <img src={C} class="project-tech-img" alt="C logo"/>
                            {/* Git */}
                            <img src={Git} class="project-tech-img" alt="Git logo"/>
                            {/* Verilog */}
                            <img src={Verilog} class="project-tech-img" alt="Verilog logo"/>
                            <a href="https://github.com/PeterBaggetta/AES-Encryption-Coprocessor-in-CBC-Mode/tree/main" target="_blank" class="project-button" rel="noreferrer">GitHub Repo</a>                         
                        </div>

                        <div class="project-image col-2">
                            <img src={CBCEncryption} alt="Encryption in CBC Mode"/>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div class="row">
                        <div class="project-info col-2">
                            <h3>Password Manager with Encryption</h3>
                            <ul>
                                <li> &#8226; This is a password manager with built in encrytion coded in Python.</li>
                                <li> &#8226; A simple command line interface to enter passwords, have them saved into a file and from there they are automatically encrypted by the program.</li>
                            </ul>
                            <h4>Technologies Used:</h4>
                            {/* Python */}
                            <img src={Python} class="project-tech-img" alt="Python logo"/>
                            {/* Git */}
                            <img src={Git} class="project-tech-img" alt="Git logo"/>
                            <a href="https://github.com/PeterBaggetta/Password-Manager-with-Encryption-in-Python" target="_blank" class="project-button" rel="noreferrer">GitHub Repo</a>
                        </div>

                        <div class="project-image col-2">
                            <img src={passwordManager} alt="Encryption in CBC Mode"/>
                        </div>
                    </div>

                    <div class="row">
                        
                        {/* Project 3 */}
                        <div class="project-info col-2">
                            <h3>Website Portfolio</h3>
                            <ul>
                                <li> &#8226; I created a website portfolio to highlight my talents and projects.</li>
                                <li> &#8226; To maintain smooth operation across different screen sizes, the website was designed to be responsive.</li>
                                <li> &#8226; The frontend is desined using React, HTML and CSS.</li>
                            </ul>
                            <h4>Technologies Used:</h4>
                            {/* HTML */}
                            <img src={HTML5} class="project-tech-img" alt="HTML5 logo"/>
                            {/* CSS */}
                            <img src={CSS3} class="project-tech-img" alt="CSS3 logo"/>
                            {/* React */}
                            <img src={React} class="project-tech-img" alt="React logo"/>
                            {/* Javascript */}
                            <img src={JavaScript} class="project-tech-img" alt="JavaScript logo"/>
                            <a href="https://github.com/PeterBaggetta/Website-Portfolio" target="_blank" class="project-button" rel="noreferrer">GitHub Repo</a>
                        </div>
                        
                        <div class="project-image col-2">
                            <img src={websitePortfolio} alt="Website Portfolio"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}