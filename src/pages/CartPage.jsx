// src/pages/CartPage.jsx (Código Modificado)

import { useCart } from '../context/CartContext';
import Counter from '../components/Counter'; 
import { FaTrash } from 'react-icons/fa'; 
import './Cart.css'; 

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart(); 
    const subtotal = cartItems.reduce(
        (acc, item) => {
            const priceValue = parseFloat(item.price.replace('$', ''));
            return acc + priceValue * item.quantity;
        }, 
        0
    );
    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    }

    if (cartItems.length === 0) {
        return (
            <div className="main-content-wrapper empty-cart cart-page">
                <h1 className="cart-title">Your Cart is Empty</h1>
                <p>Add some beautiful flowers to your cart to see them here.</p>
            </div>
        );
    }

    return (
        <div className="main-content-wrapper cart-page">
            <h1 className="cart-title">Your Shopping Cart ({cartItems.length} Items)</h1>
            <div className="cart-content"> 
                <section className="cart-items-container"> 
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="base-price">Price: {item.price}</p> 
                            </div>
                            <div className="quantity-controls"> 
                                <Counter
                                    count={item.quantity}
                                    onCountChange={(newCount) => updateQuantity(item.id, newCount)}
                                />
                            </div>
                            <div className="item-price">
                                <strong>{formatPrice(parseFloat(item.price.replace('$', '')) * item.quantity)}</strong>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </section>
                <section className="cart-summary">
                    <h2 className="summary-title">Order Summary</h2>
                    <div className="summary-detail"> 
                        <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items):</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="summary-detail"> 
                        <span>Shipping:</span>
                        <span>$5.00</span> 
                    </div>
                    <div className="summary-detail total"> 
                        <span>Total:</span>
                        <span>{formatPrice(subtotal + 5.00)}</span> 
                    </div>

                    <button className="checkout-btn">Proceed to Checkout</button>
                    
                    <button className="clear-cart-btn" onClick={() => clearCart()}>
                        Clear Cart
                    </button>
                </section>
            </div>
        </div>
    );
};

export default CartPage;