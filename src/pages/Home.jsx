
import Card from '../components/Card';
import './Home.css'; // Importa los estilos de la rejilla

const Home = ({ products }) => { 
    return (
        <div className="main-content-wrapper">
            <section className="App">
                <h1>Choose Perfection: Discover Our Exclusive Floral Collection, crafted to inspire beauty in every detail.</h1>
                
                {products.map((item) => (
                    <Card
                        // Usar item.id como key es mejor que usar el index
                        key={item.id} 
                        // Usar item.name en lugar de item.title
                        title={item.name} 
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </section>
        </div>
    );
};


export default Home;