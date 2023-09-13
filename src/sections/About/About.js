import './About.css';

export function About() {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="row">
                        <h2>About Me</h2>
                        <div className="about-info">    
                            <p>I am a software developer who enjoys full stack programming as well as foundational computer mechanisms. 
                            I completed my degree as a <span className="aboutme-important">Computer Engineer</span> from the 
                            <span className="aboutme-important"> University of Guelph</span> and have gained an extensive 
                            amount of experience from projects and past jobs throughout that time. I hope to pursue my P.Eng. licence in a 
                            challenging environment where I can demonstrate my collaborative skills by working in teams, while also 
                            providing applicable design skills and programming knowledge to work towards innovative solutions and expand my knowledge!
                            </p> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}