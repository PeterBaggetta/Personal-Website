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
        <section className="skills" id="skills">
            <div className="container">
                <h2>Skills</h2>
                
                <div className="skill-container">
                    {/* Programming Languages */}
                    <div className="skills-card">
                        <h3 className="skill-heading">Programming Languages</h3>
                        <div className="skill-items">
                            <figure className="single-logo">
                                {/* HTML */}
                                <img src={HTML5} className="single-logo-logo" alt="HTML5 logo" />
                                <figcaption className="single-logo-description">HTML</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Java */}
                                <img src={Java} className="single-logo-logo" alt="Java logo" />
                                <figcaption className="single-logo-description">Java</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* C */}
                                <img src={C} className="single-logo-logo" alt="C logo"/>
                                <figcaption className="single-logo-description">C</figcaption>
                            </figure> 
                            <figure className="single-logo">
                                {/* CSS */}
                                <img src={CSS3} className="single-logo-logo" alt="CSS3 logo" />
                                <figcaption className="single-logo-description">CSS</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Verilog */}
                                <img src={Verilog} className="single-logo-logo" alt="C logo"/>
                                <figcaption className="single-logo-description">Verilog</figcaption>
                            </figure> 
                            <figure className="single-logo">
                                {/* JavaScript */}
                                <img src={JavaScript} className="single-logo-logo" alt="JavaScript logo" />
                                <figcaption className="single-logo-description">JavaScript</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Python */}
                                <img src={Python} className="single-logo-logo" alt="Python logo" />
                                <figcaption className="single-logo-description">Python</figcaption>
                            </figure>
                        </div>                        
                    </div>
                    
                    {/* Frameworkds & Libraries */}
                    <div className="skills-card">
                        <h3 className="skill-heading">Frameworks & Libraries</h3>
                        <div className="skill-items">
                            <figure className="single-logo">
                                {/* React */}
                                <img src={React} className="single-logo-logo" alt="React logo"/>
                                <figcaption className="single-logo-description">React</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Docker */}
                                <img src={Docker} className="single-logo-logo" alt="MongoDB logo"/>
                                <figcaption className="single-logo-description">Docker</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* NodeJS */}
                                <img src={NodeJS} className="single-logo-logo" alt="NodeJS logo"/>
                                <figcaption className="single-logo-description">NodeJS</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Mongo */}
                                <img src={Mongo} className="single-logo-logo" alt="MongoDB logo"/>
                                <figcaption className="single-logo-description">MongoDB</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Spring Boot */}
                                <img src={SpringBoot} className="single-logo-logo" alt="Spring Boot logo"/>
                                <figcaption className="single-logo-description">Spring Boot</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* BitBucket */}
                                <img src={BitBucket} className="single-logo-logo" alt="BitBucket logo"/>
                                <figcaption className="single-logo-description">BitBucket</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Cloudinary */}
                                <img src={Cloudinary} className="single-logo-logo" alt="Cloudinary logo"/>
                                <figcaption className="single-logo-description">Cloudinary</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Cloudflare */}
                                <img src={Cloudflare} className="single-logo-logo" alt="Cloudflare logo"/>
                                <figcaption className="single-logo-description">Cloudflare</figcaption>
                            </figure>
                        </div>              
                    </div>
                    
                    {/* Terchnologies */}
                    <div className="skills-card">
                        <h3 className="skill-heading">Technologies</h3>
                        <div className="skill-items">
                            <figure className="single-logo">
                                {/* Git */}
                                <img src={Git} className="single-logo-logo" alt="Git logo"/>
                                <figcaption className="single-logo-description">Git</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* VSCode */}
                                <img src={VsCode} className="single-logo-logo" alt="VsCode logo"/>
                                <figcaption className="single-logo-description">VSCode</figcaption>
                            </figure> 
                            <figure className="single-logo">
                                {/* Spyder */}
                                <img src={Spyder} className="single-logo-logo" alt="Spyder logo"/>
                                <figcaption className="single-logo-description">Spyder</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Postman */}
                                <img src={Postman} className="single-logo-logo" alt="Postman logo"/>
                                <figcaption className="single-logo-description">Postman</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Linux */}
                                <img src={Linux} className="single-logo-logo" alt="Linux logo"/>
                                <figcaption className="single-logo-description">Linux</figcaption>
                            </figure> 
                            <figure className="single-logo">
                                {/* Apple */}
                                <img src={Apple} className="single-logo-logo" alt="Apple logo"/>
                                <figcaption className="single-logo-description">Apple</figcaption>
                            </figure>
                            <figure className="single-logo">
                                {/* Windows */}
                                <img src={Windows} className="single-logo-logo" alt="Windows logo"/>
                                <figcaption className="single-logo-description">Windows</figcaption>
                            </figure>    
                        </div>                                             
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}