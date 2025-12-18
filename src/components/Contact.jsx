import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="section-title">Get In Touch</div>

            <div className="contact-container">
                {/* Using FormSubmit.co for easy email handling without backend code */}
                {/* IMPORTANT: After deploying, send a test message. You will receive an email to ACTIVATE the form. */}
                <form
                    action="https://formsubmit.co/anantanand900@gmail.com"
                    method="POST"
                    className="contact-form"
                    onSubmit={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance("Message sent to Anant's email"))}
                >
                    <h3 className="form-title">Recruiters / Clients</h3>
                    <p className="form-subtitle">Interested in working together? Fill out the form below.</p>

                    {/* FormSubmit Configuration: Redirect back to page and disable captcha */}
                    <input type="hidden" name="_next" value="http://localhost:5173" /> {/* Update this URL when you deploy! */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Submission from Portfolio!" />

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@company.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company (Optional)</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Tech Corp"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="4"
                            placeholder="Hey Anant, I'd like to discuss a role..."
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
