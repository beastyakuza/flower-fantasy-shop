// src/pages/FlowerForm.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as flowerService from '../services/productsLocalService'; 
import './Admin.css'; 

const FlowerForm = ({ refreshProducts }) => { 
    const { id } = useParams(); 
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: '', 
        category: 'Bouquet'
    });
    const [title, setTitle] = useState('Create New Flower');
    useEffect(() => {
        if (id) {
            setTitle('Edit Flower');
            const flowerToEdit = flowerService.getFlowerById(id);

            if (flowerToEdit) {

                const cleanPrice = String(flowerToEdit.price).replace('$', ''); 
                

                setFormData({
                    ...flowerToEdit,

                    image: flowerToEdit.image || flowerToEdit.imageUrl || '', 
                    price: cleanPrice,
                });
            } else {
                alert("Flower not found.");
                navigate('/admin-crud');
            }
        }
    }, [id, navigate]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.price || isNaN(formData.price)) {
            alert("Name and Price are required, and Price must be a number.");
            return;
        }
        

        const priceNumber = parseFloat(formData.price).toFixed(2);
        const formattedPrice = `$${priceNumber}`;
        

        const flowerToSave = {
            ...formData,
            price: formattedPrice, 
        };
        
        try {
            if (id) {

                flowerService.updateFlower(id, flowerToSave); 
                alert(`Flower "${flowerToSave.name}" updated successfully!`);
            } else {

                flowerService.createFlower(flowerToSave); 
                alert(`Flower "${flowerToSave.name}" created successfully!`);
            }
            

            if (refreshProducts) {
                refreshProducts(); 
            }
            
            navigate('/admin-crud'); 
        } catch (error) {
            console.error("CRUD Error:", error); 
            alert(`Error saving flower data. Please check the browser console for details.`);
        }
    };
    
    return (
        <div className="flower-form-container"> 
            <h1 className="form-title">{title}</h1>
            <form className="flower-form" onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <label htmlFor="name">Name (Required)</label>
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
                    <label htmlFor="price">Price (Required)</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} 
                        required 
                        step="0.01" 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" value={formData.category} onChange={handleChange}>
                        <option value="Bouquet">Bouquet</option>
                        <option value="Roses">Roses</option>
                        <option value="Lilies">Lilies</option>
                        <option value="Tulips">Tulips</option>
                        <option value="Seasonal">Seasonal</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description (Optional)</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        rows="3"
                    ></textarea>
                </div>
                
                <div className="form-group">
                    <label htmlFor="image">Image URL (Optional)</label>
                    <input 
                        type="url" 
                        id="image" 
                        name="image" 
                        value={formData.image} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-actions-buttons"> 
                    <button type="button" className="cancel-btn" onClick={() => navigate('/admin-crud')}>
                        Cancel
                    </button>
                    <button type="submit" className="submit-btn">
                        {id ? 'Save Changes' : 'Create Flower'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FlowerForm;