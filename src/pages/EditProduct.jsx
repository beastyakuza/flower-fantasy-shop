import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as flowerService from '../services/productsLocalService'; 
import './Admin.css'; 

const EditProduct = () => {

    const { id } = useParams(); 
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        image: '',
        description: '', 
    });
    

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (!id) {
            navigate('/admin-crud');
            return;
        }

        const productData = flowerService.getFlowerById(id);
            
        if (productData) {
            setFormData(productData);
            setIsLoading(false);
        } else {

            alert(`Error: Product with ID ${id} not found.`);
            navigate('/admin-crud');
        }
        
    }, [id, navigate]); 


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        flowerService.updateFlower(id, formData);
        
        alert(`Flower "${formData.name}" updated successfully!`);
        navigate('/admin-crud'); 
    };

    if (isLoading) {
        return <div className="admin-page-wrapper loading-screen">Loading product data...</div>;
    }

    return (
        <div className="admin-page-wrapper">
            <h1 className="admin-title">Edit Flower: {formData.name}</h1>
            
            <form onSubmit={handleSubmit} className="admin-form">
                
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input 
                        type="text" 
                        id="price" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input 
                        type="text" 
                        id="category" 
                        name="category" 
                        value={formData.category} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="image">Image URL</label>
                    <input 
                        type="url" 
                        id="image" 
                        name="image" 
                        value={formData.image} 
                        onChange={handleChange} 
                        required 
                    />
                    {formData.image && <img src={formData.image} alt="Preview" className="image-preview" />}
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description (Optional)</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        value={formData.description || ''} 
                        onChange={handleChange}
                        rows="4" 
                    />
                </div>

                <button type="submit" className="admin-submit-btn update-btn">
                    Save Changes
                </button>
                <Link to="/admin-crud" className="admin-cancel-btn">
                    Cancel
                </Link>
            </form>
        </div>
    );
};

export default EditProduct;