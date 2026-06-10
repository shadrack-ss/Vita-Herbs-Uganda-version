import './Contact.css';

function Contact() {
    return (
        <section className="section" id="contact">
            <div className="container contact-box">
                <div>
                    <span className="eyebrow">Contact</span>
                    <h2>Talk to us today</h2>
                    <p>For product questions, orders, and support, contact us directly.</p>
                </div>
                <div className="contact-actions">
                    <a href="mailto:info@vitaherbs.com" rel="noopener noreferrer">
                        Email Us
                    </a>
                    <a href="whatsapp://send?phone=256760108564" rel="noopener noreferrer">
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;