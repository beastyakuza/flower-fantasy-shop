
import './Card.css';
import { FaShoppingCart } from 'react-icons/fa'; 


const Card = ({ id, name, price, image, category, addToCart }) => {
    
    const productData = { id, name, price, image };

    const handleAddToCart = () => {

        addToCart(productData);
        alert(`${name} added to cart!`); 
    };

    return (
        <div className="product-card"> 
            <div className="product-image-container"> 

                <img src={image} alt={name} className="product-image" />
            </div>
            
            <div className="product-info"> 

                <h3 className="product-name">{name}</h3>
                <p className="product-category">{category}</p> 
                <p className="product-price">{price}</p>

            </div>
            <button onClick={handleAddToCart} className="add-to-cart-btn">
                <FaShoppingCart /> 
                Añadir al Carrito
            </button>
        </div>
    );
};

export default Card;