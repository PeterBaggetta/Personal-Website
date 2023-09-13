import './Contact.css';

export function Contact () {
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                <h2>Contact Me</h2>
                    <div className="row">                        
                        <form action="https://formsubmit.co/peter.baggetta@gmail.com" className="form" method="POST">
                            {/* Email Subject */}
                            <input type="hidden" name="_subject" value="New Email From Portfolio"/>

                            {/* Full Name */}
                            <input type="text" name="name" placeholder="Full Name" autoComplete='name' required/>

                            {/* Email */}
                            <input type="email" name="email" placeholder="Email" autoComplete='email' required/>

                            {/* Message*/}
                            <input type="text" name="message" placeholder="Message" required/>
                            
                            {/* Submit Buttom */}
                            <button type="submit" className="contact-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}