import { useNavigate } from "react-router-dom";
import "../styles/AboutUs.css";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-us">
      <div className="about-container">
        <h1>About Paradise Nursery</h1>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded with a passion for bringing nature into
            homes. We believe that plants are not just decorations—they're
            living companions that improve our well-being and connect us to
            nature.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality, healthy plants and exceptional customer
            service, making it easy for everyone to create their own green
            paradise at home.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="features-list">
            <li>🌱 Carefully selected, healthy plants</li>
            <li>💚 Expert care guides included</li>
            <li>🚚 Fast and reliable delivery</li>
            <li>⭐ 100% satisfaction guarantee</li>
            <li>🎯 Competitive pricing</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Email: info@paradiseseedery.com
            <br />
            Phone: +855 (0) 23 XXX XXXX
            <br />
            Location: Phnom Penh, Cambodia
          </p>
        </section>

        <button className="back-btn" onClick={() => navigate("/products")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
