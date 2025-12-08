import './App.css'
import Card from './components/Card.jsx'
import Layout from './components/Layout.jsx';

const cleanPrice = (priceString) => {
    return Number(priceString.replace('$', ''));
};

function App() {
    const infoCard = [
        {title: 'Rose', price: '$10', image: 'https://media.istockphoto.com/id/1191892713/es/foto/rosa-roja-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=dRUJJpYyCHC52IZ0W4uRBMfbw1oBjDHzDFFQ1pqsIRE='},
        {title: 'Tulip', price: '$12', image: 'https://img.freepik.com/vector-premium/tulipanes-sobre-fondo-blanco-flores-diferentes-colores-esquina-izquierda_267960-16.jpg'},
        {title: 'Peonies', price: '$8', image: 'https://media.istockphoto.com/id/696360122/es/foto/flores-de-peon%C3%ADa-rosa-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=sIuqIN29FiBnKMYeh03Kz8aKdaWxhkyWKnQk1y7ROx4='},
        {title: 'Hydrangeas', price: '$13', image: 'https://img.freepik.com/fotos-premium/gran-arreglo-floral-hortensia-sobre-fondo-blanco_331161-211.jpg'},
        {title: 'Orchids', price: '$13', image: 'https://media.istockphoto.com/id/506839269/es/foto/orchid-en-blanco.jpg?s=612x612&w=0&k=20&c=XmdfMdzbppKDrZfkVozHq8l6OzGeNKgkpgj6jtCBCAQ='},
        {title: 'Sunflowers', price: '$14', image: 'https://img.freepik.com/foto-gratis/ai-genero-girasoles_23-2150681806.jpg?semt=ais_se_enriched&w=740&q=80'},
        {title: 'Lilies', price: '$14', image: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-white-lily-png-flower-clipart-png-picture-download-white-lily-clipart-image_2649007.jpg'},
        {title: 'Carnations', price: '$14', image: 'https://previews.123rf.com/images/noppharat/noppharat1209/noppharat120900177/15490559-carnation-isolated-on-white-background-carnation-for-mother-s-day-image.jpg'},
        {title: 'Lavender', price: '$14', image: 'https://previews.123rf.com/images/nito500/nito5001105/nito500110500078/9527411-a-bunch-of-lavender-flowers-on-a-white-background.jpg'},
        {title: 'Daisies', price: '$7', image: 'https://png.pngtree.com/thumb_back/fh260/background/20240401/pngtree-daisies-summer-white-flower-isolated-on-white-background-image_15644684.jpg'},
        {title: 'Irises', price: '$15', image: 'https://media.istockphoto.com/id/982928730/es/foto/iris-en-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=MsIjSJAnsXrfeyaqsq0ZkbXR59HUzaNwAg4mTRLUuuE='},
        {title: 'Dahlias', price: '$11', image: 'https://www.shutterstock.com/image-photo/blue-dahlia-flower-head-isolated-600nw-2599006179.jpg'},
        {title: 'Daffodils', price: '$10', image: 'https://st2.depositphotos.com/4431055/11852/i/950/depositphotos_118523210-stock-photo-daffodils-isolated-on-white-background.jpg'},
        {title: 'Wisteria', price: '$18', image: 'https://thumbs.dreamstime.com/b/flores-de-glicinia-aisladas-en-fondo-blanco-401070260.jpg'},
        {title: 'Marigolds', price: '$7', image: 'https://static.vecteezy.com/system/resources/thumbnails/029/866/514/small/of-beautiful-marigold-flower-isolated-on-white-background-generative-ai-photo.jpg'}
    ];

    return (
      <Layout>
        <section className="App">
          <h1>Choose Perfection: Our Exclusive Floral Collection. We are pleased to offer you our best products. Don't hesitate to place your order.</h1>
            {infoCard.map((card, index) => (
                <Card 
                    key={index}
                    title={card.title}
                    price={card.price} 
                    image={card.image}
                    priceValue={cleanPrice(card.price)} 
                />
            ))}
        </section>
        </Layout>
    )
}

export default App