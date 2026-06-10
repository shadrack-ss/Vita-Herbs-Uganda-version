import React, { useState } from 'react';
import './NewsLetter.css';

function NewsLetter(){
    const [email, setEmail] = useState("");
    const [newsletterMsg, setNewsletterMsg] = useState<null | { type: 'success' | 'error'; text: string }>(null);

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const v = email.trim();
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!re.test(v)) {
            setNewsletterMsg({ type: 'error', text: 'Please enter a valid email address.' });
            return;
        }

        try {
            const key = 'vitaherbs_subscribers';
            const existing: string[] = JSON.parse(localStorage.getItem(key) || '[]');
            if (!existing.includes(v)) {
                existing.push(v);
                localStorage.setItem(key, JSON.stringify(existing));
                setNewsletterMsg({ type: 'success', text: 'Thanks for subscribing! Check your email for updates.' });
            } else {
                setNewsletterMsg({ type: 'error', text: 'This email is already subscribed!' });
                return;
            }
            setEmail('');
            setTimeout(() => setNewsletterMsg(null), 5000);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setNewsletterMsg({ type: 'error', text: 'Subscription failed. Please try again.' });
        }
    };

    return (
        <section className="section newsletter">
            <div className="container newsletter-box">
                <div className="newsletter-content">
                    <span className="eyebrow">Newsletter</span>
                    <h2>Stay updated with Vita Herbs</h2>
                    <p>Get herbal wellness tips, new products, and promotions.</p>
                </div>

                <div className="newsletter-wrapper">
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                    {newsletterMsg && (
                        <div className={`newsletter-msg ${newsletterMsg.type}`}>
                            {newsletterMsg.text}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default NewsLetter;