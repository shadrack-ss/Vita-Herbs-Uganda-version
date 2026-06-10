import NewsLetter from '../components/ui/NewsLetter'
import { Link } from 'react-router-dom'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Socials from './Socials'
import heroImage from '../assets/hero-herbs.jpg'; 
import'./Home.css'
function Home(){
    return(
        <>
         <main id="home">
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Natural Herbal Wellness</span>
          <h1>Herbal Extract Medicine for Better Everyday Living</h1>
          <p>
            Vita Herbs is a new herbal company focused on natural extract-based wellness products.
            Discover trusted herbal solutions and order easily through WhatsApp.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">View Products</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>

          <div className="trust-badges">
            <div>Natural Ingredients</div>
            <div>Quality Focused</div>
            <div>Fast Support</div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Herbal leaves and natural medicine"
          />
        </div>
      </div>
    </section>

    <Products />
    <About />
    <Socials/>
    <NewsLetter />
    <Contact />
  </main>
        
        </>
    )
}
export default Home