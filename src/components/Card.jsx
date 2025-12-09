import './Card.css';

const Card = ({ title, price, image }) => {
    return (
        <section className="card">
            <img className="card-image" src={image} alt={title} />
            
            <div className="card-content"> 
                <h2 className="card-title">{title}</h2>
                <p className="unit-price">Unity: {price}</p> 
                <button 
                    className="add-to-cart-button"
                >
                    Add to Cart
                </button> 
                
            </div>
        </section>
    );
};

export default Card;