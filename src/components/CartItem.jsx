import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
import '../styles/CartItem.css';

export default function CartItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(state => state.cart);

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Start adding plants to your cart!</p>
        <button onClick={() => navigate('/products')} className="continue-shopping-btn">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">{item.image}</div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="unit-price">Unit Price: ${item.price}</p>
            </div>
            <div className="item-controls">
              <button 
                className="qty-btn" 
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                −
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                className="qty-btn" 
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
            </div>
            <div className="item-cost">
              <p className="total-cost">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button 
              className="delete-btn" 
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Cart Total: ${totalAmount.toFixed(2)}</h2>
        <div className="cart-actions">
          <button className="checkout-btn">
            Coming Soon
          </button>
          <button 
            className="continue-shopping-btn"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
