import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';
import '../styles/ProductList.css';

const products = {
  'Succulents': [
    { id: 1, name: 'Aloe Vera', price: 15, image: '🌵', description: 'Healing succulent' },
    { id: 2, name: 'Jade Plant', price: 20, image: '💚', description: 'Long-lasting succulent' },
    { id: 3, name: 'Echeveria', price: 12, image: '🌸', description: 'Colorful rosette' },
    { id: 4, name: 'Haworthia', price: 14, image: '🌿', description: 'Zebra-striped leaves' },
    { id: 5, name: 'Sempervivum', price: 10, image: '🌺', description: 'Hardy succulent' },
    { id: 6, name: 'Sedum', price: 11, image: '⭐', description: 'Low-maintenance beauty' },
  ],
  'Tropical Plants': [
    { id: 7, name: 'Monstera', price: 35, image: '🍃', description: 'Swiss cheese plant' },
    { id: 8, name: 'Bird of Paradise', price: 45, image: '🦜', description: 'Vibrant tropical flower' },
    { id: 9, name: 'Hibiscus', price: 28, image: '🌺', description: 'Tropical flowering plant' },
    { id: 10, name: 'Bougainvillea', price: 32, image: '🌸', description: 'Colorful bracts' },
    { id: 11, name: 'Plumeria', price: 38, image: '💛', description: 'Fragrant blooms' },
    { id: 12, name: 'Frangipani', price: 40, image: '🌼', description: 'Exotic flowers' },
  ],
  'Indoor Plants': [
    { id: 13, name: 'Pothos', price: 18, image: '🪴', description: 'Easy-care vine plant' },
    { id: 14, name: 'Snake Plant', price: 22, image: '🌱', description: 'Air-purifying plant' },
    { id: 15, name: 'Philodendron', price: 25, image: '🍂', description: 'Heart-shaped leaves' },
    { id: 16, name: 'Spider Plant', price: 16, image: '🕷️', description: 'Air-purifying dangler' },
    { id: 17, name: 'Boston Fern', price: 24, image: '🌿', description: 'Elegant foliage' },
    { id: 18, name: 'Peace Lily', price: 20, image: '⚪', description: 'White flower bloomer' },
  ],
};

export default function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addedItems = useSelector(state => state.cart.items.map(item => item.id));

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
  };

  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="products-grid">
            {items.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <p className="price">${product.price}</p>
                <button
                  className={`add-to-cart-btn ${addedItems.includes(product.id) ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={addedItems.includes(product.id)}
                >
                  {addedItems.includes(product.id) ? '✓ Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
