import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-root">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col-brand">
                        <div className="footer-brand-row">
                            <span className="footer-logo-badge">
                                <img
                                    src="logo.jpeg"
                                    alt="VitaHerbs Uganda"
                                    className="footer-logo-img"
                                />
                            </span>
                            <span className="footer-site-title">
                                VitaHerbs <span className="footer-site-region">Uganda</span>
                            </span>
                        </div>
                        <p className="footer-description">
                            Nature's Wisdom, Uganda's Finest. Premium herbal wellness products carefully crafted from nature's finest ingredients.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/vitaherbsuganda" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/vitaherbsuganda" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@vitaherbsuganda" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="footer-social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="8" cy="18" r="4"></circle>
                                    <path d="M12 18V2l7 4"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-links-section">
                        <h4 className="footer-section-title">Quick Links</h4>
                        <ul className="footer-links-list">
                            <li><Link className="footer-link" to="/">Home</Link></li>
                            <li><Link className="footer-link" to="/products">Products</Link></li>
                            <li><Link className="footer-link" to="/about">About</Link></li>
                            <li><Link className="footer-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-contact-section">
                        <h4 className="footer-section-title">Contact</h4>
                        <ul className="footer-contact-list">
                            <li className="footer-contact-item">
                                <a className="footer-contact-link" href="https://www.google.com/maps/search/?api=1&query=Mbarara%2C+Uganda" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Mbarara, Uganda</span>
                                </a>
                            </li>
                            <li className="footer-contact-item">
                                <a className="footer-contact-link" href="whatsapp://send?phone=256760108564" aria-label="Open WhatsApp chat">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                                    </svg>
                                    <span>WhatsApp: +256 760 108 564</span>
                                </a>
                            </li>
                            <li className="footer-contact-item">
                                <a className="footer-contact-link" href="mailto:hello@vitaherbs.ug">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    </svg>
                                    <span>hello@vitaherbs.ug</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-quote">"Nature's Wisdom, Uganda's Finest"</p>
                    <p className="footer-copyright">© {new Date().getFullYear()} VitaHerbs Uganda. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;