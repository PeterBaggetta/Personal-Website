import './Skills.css';

// Programming Languages Logos
import HTML5 from '../../media/html5.png';
import Java from '../../media/java.png';
import C from '../../media/C.png';
import CSS3 from '../../media/css3.png';
import Verilog from '../../media/systemverilog.png';
import JavaScript from '../../media/javascript.png';
import Python from '../../media/python.png';

// Frameworks & Libraries Logos
import React from '../../media/react.png';
import Docker from '../../media/docker.png';
import NodeJS from '../../media/node_js.png';
import Mongo from '../../media/mongodb.png';
import SpringBoot from '../../media/Spring_Boot.png';
import BitBucket from '../../media/bitbucket.png';
import Cloudinary from '../../media/Cloudinary.png';
import Cloudflare from '../../media/Cloudflare.png';

// Technologies Logos
import Git from '../../media/git.png';
import VsCode from '../../media/vscode.png';
import Spyder from '../../media/Spyder.png';
import Postman from '../../media/postman.png';
import Linux from '../../media/linux.png';
import Apple from '../../media/apple.png';
import Windows from '../../media/windows.png';

export function Skills() {
    return (
        <>
        {/* Skills */}
        <section class="skills" id="skills">
            <div class="container">
                <h2>Skills</h2>
                
                <div class="skill-container">
                    {/* Programming Languages */}
                    <div class="skills-card">
                        <h3 class="skill-heading">Programming Languages</h3>
                        <div class="skill-items">
                            <figure class="single-logo">
                                {/* HTML */}
                                <img src={HTML5} class="single-logo-logo" alt="HTML5 logo" />
                                <figcaption class="single-logo-description">HTML</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Java */}
                                <img src={Java} class="single-logo-logo" alt="Java logo" />
                                <figcaption class="single-logo-description">Java</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* C */}
                                <img src={C} class="single-logo-logo" alt="C logo"/>
                                <figcaption class="single-logo-description">C</figcaption>
                            </figure> 
                            <figure class="single-logo">
                                {/* CSS */}
                                <img src={CSS3} class="single-logo-logo" alt="CSS3 logo" />
                                <figcaption class="single-logo-description">CSS</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Verilog */}
                                <img src={Verilog} class="single-logo-logo" alt="C logo"/>
                                <figcaption class="single-logo-description">Verilog</figcaption>
                            </figure> 
                            <figure class="single-logo">
                                {/* JavaScript */}
                                <img src={JavaScript} class="single-logo-logo" alt="JavaScript logo" />
                                <figcaption class="single-logo-description">JavaScript</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Python */}
                                <img src={Python} class="single-logo-logo" alt="Python logo" />
                                <figcaption class="single-logo-description">Python</figcaption>
                            </figure>
                        </div>                        
                    </div>
                    
                    {/* Frameworkds & Libraries */}
                    <div class="skills-card">
                        <h3 class="skill-heading">Frameworks & Libraries</h3>
                        <div class="skill-items">
                            <figure class="single-logo">
                                {/* React */}
                                <img src={React} class="single-logo-logo" alt="React logo"/>
                                <figcaption class="single-logo-description">React</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Docker */}
                                <img src={Docker} class="single-logo-logo" alt="MongoDB logo"/>
                                <figcaption class="single-logo-description">Docker</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* NodeJS */}
                                <img src={NodeJS} class="single-logo-logo" alt="NodeJS logo"/>
                                <figcaption class="single-logo-description">NodeJS</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Mongo */}
                                <img src={Mongo} class="single-logo-logo" alt="MongoDB logo"/>
                                <figcaption class="single-logo-description">MongoDB</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Spring Boot */}
                                <img src={SpringBoot} class="single-logo-logo" alt="Spring Boot logo"/>
                                <figcaption class="single-logo-description">Spring Boot</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* BitBucket */}
                                <img src={BitBucket} class="single-logo-logo" alt="BitBucket logo"/>
                                <figcaption class="single-logo-description">BitBucket</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Cloudinary */}
                                <img src={Cloudinary} class="single-logo-logo" alt="Cloudinary logo"/>
                                <figcaption class="single-logo-description">Cloudinary</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Cloudflare */}
                                <img src={Cloudflare} class="single-logo-logo" alt="Cloudflare logo"/>
                                <figcaption class="single-logo-description">Cloudflare</figcaption>
                            </figure>
                        </div>              
                    </div>
                    
                    {/* Terchnologies */}
                    <div class="skills-card">
                        <h3 class="skill-heading">Technologies</h3>
                        <div class="skill-items">
                            <figure class="single-logo">
                                {/* Git */}
                                <img src={Git} class="single-logo-logo" alt="Git logo"/>
                                <figcaption class="single-logo-description">Git</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* VSCode */}
                                <img src={VsCode} class="single-logo-logo" alt="VsCode logo"/>
                                <figcaption class="single-logo-description">VSCode</figcaption>
                            </figure> 
                            <figure class="single-logo">
                                {/* Spyder */}
                                <img src={Spyder} class="single-logo-logo" alt="Spyder logo"/>
                                <figcaption class="single-logo-description">Spyder</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Postman */}
                                <img src={Postman} class="single-logo-logo" alt="Postman logo"/>
                                <figcaption class="single-logo-description">Postman</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Linux */}
                                <img src={Linux} class="single-logo-logo" alt="Linux logo"/>
                                <figcaption class="single-logo-description">Linux</figcaption>
                            </figure> 
                            <figure class="single-logo">
                                {/* Apple */}
                                <img src={Apple} class="single-logo-logo" alt="Apple logo"/>
                                <figcaption class="single-logo-description">Apple</figcaption>
                            </figure>
                            <figure class="single-logo">
                                {/* Windows */}
                                <img src={Windows} class="single-logo-logo" alt="Windows logo"/>
                                <figcaption class="single-logo-description">Windows</figcaption>
                            </figure>    
                        </div>                                             
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}