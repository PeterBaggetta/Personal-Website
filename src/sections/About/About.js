import './About.css';

export function About() {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="row">
                        <h2>About Me</h2>
                        <div className="about-info">    
                            <p>
                                I’m a <span className="aboutme-important">Computer Engineering</span> graduate from the
                                <span className="aboutme-important"> University of Guelph</span> who loves turning complex 
                                problems into elegant, reliable solutions. My background blends full-stack software development, 
                                hardware design, networking, and systems analysis — giving me the versatility to work across the 
                                stack and bridge the gap between ideas and execution.

                                <br />
                                <br />
                                
                                I work across the stack - APIs, data pipelines, infrastructure-as-code, and 
                                modern web applications, always with an eye on performance, security and developer experience. I enjoy 
                                collaborating with diverse teams, learning from different perspectives, and finding innovative ways to make 
                                systems faster, safer, and more efficient.

                                <br />
                                <br />
                                
                                Recent work includes:
                                <ul>
                                    <li> &#8226; Automating cloud workflows and CI/CD to reduce deploy friction.</li>
                                    <li> &#8226; Designing resilient services with clean interfaces and strong observability</li>
                                    <li> &#8226; Shipping modern web frontends with React/Next.js and accessible UI patterns</li>
                                </ul>

                            </p> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}






