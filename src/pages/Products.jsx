import Card from '../components/Card';
import './Products.css'; // Crearemos este archivo CSS

const Products = ({ products }) => {
    
    // Función para agrupar los productos por su categoría
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
            
            {/* Mapea sobre las categorías agrupadas (Standard, Premium, Seasonal) */}
            {Object.keys(groupedProducts).map(category => (
                <section key={category} className="product-category-section">
                    
                    {/* Título de la Categoría */}
                    <h2>{category} Flowers</h2> 
                    
                    {/* Contenedor de la Rejilla de la Categoría */}
                    <div className="category-grid">
                        {groupedProducts[category].map(item => (
    <Card
        key={item.id}
        title={item.name}
        price={item.price}
        image={item.image}
        // ⬅️ CLAVE: Añadir esta clase
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