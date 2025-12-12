
import Card from '../components/Card';
import { useCart } from '../context/CartContext'; 
import './Products.css';


const Products = ({ products }) => {
    

    const { addToCart } = useCart(); 
    

    const groupedProducts = products.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    return (
        <div className="main-content-wrapper products-page">
            <h1 className="products-title">All Our Flowers Classified</h1>
            {Object.keys(groupedProducts).map(category => (
                <section key={category} className="product-category-section">
                    <h2>{category} Flowers</h2> 
                    <div className="category-grid">
                        {groupedProducts[category].map(item => (
                            <Card
                                key={item.id}
                                id={item.id} 
                                name={item.name} 
                                price={item.price}
                                image={item.image}
                                category={item.category} 
                                addToCart={addToCart} 
                                className="card-product" 
                            />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Products;