import './About.css';

function About() {
    return (
        <section className="section section-alt" id="about">
            <div className="container about-grid">
                <div>
                    <span className="eyebrow">About Vita Herbs</span>
                    <h2>Wellness inspired by nature</h2>
                    <p>
                        Vita Herbs is dedicated to providing herbal extract products that support healthy living naturally.
                        Our focus is quality, simplicity, and strong customer support.
                    </p>
                </div>
                <div className="about-box">
                    <h3>Why choose us?</h3>
                    <ul>
                        <li>Natural herbal ingredients</li>
                        <li>Easy ordering via WhatsApp</li>
                        <li>Social media support and updates</li>
                        <li>Customer-focused service</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;