import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const cartCount = useSelector(state =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🌿 Paradise Nursery
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
