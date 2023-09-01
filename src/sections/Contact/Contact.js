import './Contact.css';

export function Contact () {
    return (
        <>
            <section class="contact" id="contact">
                <div class="container">
                <h2>Contact Me</h2>
                    <div class="row">                        
                        <form action="https://formsubmit.co/peter.baggetta@gmail.com" class="form" method="POST">
                            {/* Email Subject */}
                            <input type="hidden" name="_subject" value="New Email From Portfolio"/>

                            {/* Full Name */}
                            <input type="text" name="name" placeholder="Full Name" required/>

                            {/* Email */}
                            <input type="email" name="email" placeholder="Email" required/>

                            {/* Message*/}
                            <input type="text" name="message" placeholder="Message" required/>
                            
                            {/* Submit Buttom */}
                            <button type="submit" class="contact-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}