import React, { useState, useEffect } from 'react'; // 👈 AGREGAR estos Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de Layout
import Layout from './components/Layout'; 
// Importaciones de Páginas
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage'; 
import Login from './pages/Login';

// Componentes y Páginas de Administración (CRUD y Protección)
import ProtectedRoute from './components/ProtectedRoute'; 
import AdminDashboard from './pages/AdminDashboard';   
import FlowerForm from './pages/FlowerForm';          
import * as flowerService from './services/productsLocalService';      
import { CartProvider } from './context/CartContext'; 
import { AuthProvider } from './context/AuthContext';
import EditProduct from './pages/EditProduct';

const initialProducts = [
    {id: '1', name: 'Rose', price: '$10.00', image: 'https://media.istockphoto.com/id/1191892713/es/foto/rosa-roja-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=dRUJJpYyCHC52IZ0W4uRBMfbw1oBjDHzDFFQ1pqsIRE=', category: 'Standard'},
    {id: '2', name: 'Tulip', price: '$12.00', image: 'https://img.freepik.com/vector-premium/tulipanes-sobre-fondo-blanco-flores-diferentes-colores-esquina-izquierda_267960-16.jpg', category: 'Standard'},
    {id: '3', name: 'Peonies', price: '$8.00', image: 'https://media.istockphoto.com/id/696360122/es/foto/flores-de-peon%C3%ADa-rosa-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=sIuqIN29FiBnKMYeh03Kz8aKdaWxhkyWKnQk1y7ROx4=', category: 'Premium'},
    {id: '4', name: 'Hydrangeas', price: '$13.00', image: 'https://img.freepik.com/fotos-premium/gran-arreglo-floral-hortensia-sobre-fondo-blanco_331161-211.jpg', category: 'Premium'},
    {id: '5', name: 'Orchids', price: '$13.00', image: 'https://media.istockphoto.com/id/506839269/es/foto/orchid-en-blanco.jpg?s=612x612&w=0&k=20&c=XmdfMdzbppKDrZfkVozHq8l6OzGeNKgkpgj6jtCBCAQ=', category: 'Premium'},
    {id: '6', name: 'Sunflowers', price: '$14.00', image: 'https://img.freepik.com/foto-gratis/ai-genero-girasoles_23-2150681806.jpg?semt=ais_se_enriched&w=740&q=80', category: 'Seasonal'},
    {id: '7', name: 'Lilies', price: '$14.00', image: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-white-lily-png-flower-clipart-png-picture-download-white-lily-clipart-image_2649007.jpg', category: 'Standard'},
    {id: '8', name: 'Carnations', price: '$14.00', image: 'https://previews.123rf.com/images/noppharat/noppharat1209/noppharat120900177/15490559-carnation-isolated-on-white-background-carnation-for-mother-s-day-image.jpg', category: 'Standard'},
    {id: '9', name: 'Lavender', price: '$14.00', image: 'https://previews.123rf.com/images/nito500/nito5001105/nito500110500078/9527411-a-bunch-of-lavender-flowers-on-a-white-background.jpg', category: 'Standard'},
    {id: '10', name: 'Daisies', price: '$7.00', image: 'https://png.pngtree.com/thumb_back/fh260/background/20240401/pngtree-daisies-summer-white-flower-isolated-on-white-background-image_15644684.jpg', category: 'Seasonal'},
    {id: '11', name: 'Irises', price: '$15.00', image: 'https://media.istockphoto.com/id/982928730/es/foto/iris-en-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=MsIjSJAnsXrfeyaqsq0ZkbXR59HUzaNwAg4mTRLUuuE=', category: 'Premium'},
    {id: '12', name: 'Dahlias', price: '$11.00', image: 'https://www.shutterstock.com/image-photo/blue-dahlia-flower-head-isolated-600nw-2599006179.jpg', category: 'Seasonal'},
    {id: '13', name: 'Poppies', price: '$9.00', image: 'https://www.shutterstock.com/shutterstock/photos/2306672165/display_1500/stock-photo-red-poppy-flower-on-white-background-memorial-day-graphic-veteran-usa-america-united-states-of-2306672165.jpg', category: 'Seasonal'},
    {id: '14', name: 'Daffodils', price: '$10.00', image: 'https://st2.depositphotos.com/4431055/11852/i/950/depositphotos_118523210-stock-photo-daffodils-isolated-on-white-background.jpg', category: 'Standard'},
    {id: '15', name: 'Wisteria', price: '$18.00', image: 'https://thumbs.dreamstime.com/b/flores-de-glicinia-aisladas-en-fondo-blanco-401070260.jpg', category: 'Premium'},
    {id: '16', name: 'Marigolds', price: '$7.00', image: 'https://static.vecteezy.com/system/resources/thumbnails/029/866/514/small/of-beautiful-marigold-flower-isolated-on-white-background-generative-ai-photo.jpg', category: 'Seasonal'}
];


const App = () => { 
    // 2. ESTADO PARA GUARDAR LOS DATOS DE LA DB (LocalStorage)
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

    // 3. LÓGICA DE CARGA E INICIALIZACIÓN
useEffect(() => {
        let storedProducts = flowerService.getAllFlowers();
        
        if (storedProducts.length === 0) {
            console.log("Initializing LocalStorage with static flower data.");
            
            initialProducts.forEach(p => {
                flowerService.createFlower({ 
                    name: p.name, 
                    price: p.price.replace('$', ''), 
                    image: p.image, 
                    category: p.category 
                });
            });
            storedProducts = flowerService.getAllFlowers(); 
        }
        
        setProductsData(storedProducts);
        setLoading(false);
    }, []);
    const refreshProducts = () => {
        setProductsData(flowerService.getAllFlowers());
    };
    if (loading) {
        return <div style={{textAlign: 'center', paddingTop: '50px'}}>Loading Flower Fantasy Data...</div>;
    }


    return (
        <BrowserRouter>
<AuthProvider>
    <CartProvider>
            <Layout>
                <Routes>
    {/* RUTAS PÚBLICAS: AHORA USAN productsData (de LocalStorage) */}
    <Route path="/" element={<Home products={productsData} />} /> 
    <Route path="/products" element={<Products products={productsData} />} /> 
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/cart" element={<CartPage />} /> 
    <Route path="/admin-crud/edit/:id" element={<EditProduct />} />

    {/* RUTAS PROTEGIDAS PARA ADMIN: PASAMOS LA FUNCIÓN DE REFRESH */}
    <Route element={<ProtectedRoute requiredRole="admin" />}> 
        <Route path="/admin-crud" element={<AdminDashboard refreshProducts={refreshProducts} />} />
        <Route path="/admin-crud/new" element={<FlowerForm refreshProducts={refreshProducts} />} />
        <Route path="/admin-crud/edit/:id" element={<FlowerForm refreshProducts={refreshProducts} />} />
    </Route>

    {/* RUTA NO ENCONTRADA */}
    {/* <Route path="*" element={<NotFound />} /> */}
</Routes>
            </Layout>
</CartProvider>
</AuthProvider>
        </BrowserRouter>
    );
};

export default App;