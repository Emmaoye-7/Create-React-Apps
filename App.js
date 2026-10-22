import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import './App.css';

const firstName = '';

function App() {
  return (
    <main className="shop-page">
      <Container className="shop-container">
        <header className="shop-header">
          <a className="wordmark" href="#home" aria-label="Forma home">
            forma<span>.</span>
          </a>
          <span className="header-note">Thoughtful objects for living</span>
        </header>

        <section className="product-section" id="home">
          <div className="section-intro">
            <p className="eyebrow">THE EVERYDAY EDIT · 01</p>
            <h1>Light, made lovely.</h1>
            <p className="intro-copy">
              A softer glow for slow mornings and long evenings.
            </p>
          </div>

          <Card className="product-card">
            <div className="product-image-wrap">
              <span className="product-badge">BESTSELLER</span>
              <Image />
              <span className="image-caption">Designed for your downtime</span>
            </div>
            <Card.Body className="product-details">
              <p className="product-category">LIGHTING / TABLE LAMPS</p>
              <Name />
              <div className="rating" aria-label="Rated 4.9 out of 5 stars">
                <span aria-hidden="true">★★★★★</span>
                <span className="rating-copy">4.9 <span>(128 reviews)</span></span>
              </div>
              <Description />
              <div className="purchase-row">
                <Price />
                <button className="add-button" type="button">
                  Add to bag <span aria-hidden="true">↗</span>
                </button>
              </div>
              <p className="shipping-note">Complimentary shipping on orders over $100</p>
            </Card.Body>
          </Card>

          <div className="greeting" aria-live="polite">
            {firstName ? (
              <img
                className="greeting-image"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80"
                alt=""
              />
            ) : null}
            <p>Hello, {firstName || 'there'}!</p>
          </div>
        </section>

        <footer className="shop-footer">
          <span>Made with care, meant to be kept.</span>
          <span>FORM / 2025</span>
        </footer>
      </Container>
    </main>
  );
}

export default App;
