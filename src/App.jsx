import './App.scss';

function App() {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <h1>kutubox.</h1>
        </div>
      </header>

      <section className="hero">
        <h1>Unbox Surprises Every Month!</h1>
        <p>
          Receive a personalized subscription box filled with fashion,
          beauty, and lifestyle items right at your doorstep — every single month.
        </p>
        <button className="btn-primary">Subscribe Now</button>
      </section>


      {/* Products Section */}
      <section className="products">
        <h2 className="section-title">Our Popular Boxes</h2>
        <div className="products__list">
          <div className="products__item">
            <img src="../public/beauty-box.jpg" alt="Beauty Box" className="products__image" />
            <h3 className="products__title">Beauty Box</h3>
            <p className="products__desc">A curated selection of beauty products to pamper yourself every month.</p>
          </div>
          <div className="products__item">
            <img src="../public/fashion-box.jpg" alt="Fashion Box" className="products__image" />
            <h3 className="products__title">Fashion Box</h3>
            <p className="products__desc">Trendy fashion items that make you stand out in every season.</p>
          </div>
          <div className="products__item">
            <img src="../public/lifestyle-box.webp" alt="Lifestyle Box" className="products__image" />
            <h3 className="products__title">Lifestyle Box</h3>
            <p className="products__desc">A mix of lifestyle items to elevate your daily routine.</p>
          </div>
        </div>
      </section>


      <section className="features">
        <div className="feature">
          <h3>New Products Monthly</h3>
          <p>
            Each box contains hand-picked products from top brands and hidden gems.
          </p>
        </div>
        <div className="feature">
          <h3>Personalized for You</h3>
          <p>
            Tailored to your preferences to give you the most relevant experience.
          </p>
        </div>
        <div className="feature">
          <h3>Free Nationwide Shipping</h3>
          <p>
            No hidden fees or shipping costs — we deliver anywhere, anytime.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 KutuBox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
