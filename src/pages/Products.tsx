import './Products.css';

function Products() {
    return (
        <section className="section" id="products">
            <div className="container">
                <div className="section-heading">
                    <span className="eyebrow">Featured Products</span>
                    <h2>Our Herbal Products</h2>
                    <p>Browse a few of our featured herbal extract products.</p>
                </div>

                <div className="cards">
                    <article className="card">
                        <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80" alt="Vita Detox Extract" />
                        <div className="card-body">
                            <h3>Vita Detox Extract</h3>
                            <p>Supports body cleansing and wellness balance.</p>
                            <a href="whatsapp://send?phone=256760108564" rel="noopener noreferrer">Order on WhatsApp</a>
                        </div>
                    </article>

                    <article className="card">
                        <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80" alt="Vita Immune Boost" />
                        <div className="card-body">
                            <h3>Vita Immune Boost</h3>
                            <p>Made to support everyday immune wellness.</p>
                            <a href="whatsapp://send?phone=256760108564" rel="noopener noreferrer">Order on WhatsApp</a>
                        </div>
                    </article>

                    <article className="card">
                        <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80" alt="Vita Joint Relief" />
                        <div className="card-body">
                            <h3>Vita Joint Relief</h3>
                            <p>Herbal support for movement comfort and wellness.</p>
                            <a href="whatsapp://send?phone=256760108564" rel="noopener noreferrer">Order on WhatsApp</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Products;