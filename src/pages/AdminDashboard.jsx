import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as flowerService from '../services/productsLocalService';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './Admin.css'; 

const AdminDashboard = () => {
    const [flowers, setFlowers] = useState([]);
    const navigate = useNavigate();
    const { isAdmin } = useAuth();

    const loadFlowers = () => {
        const allFlowers = flowerService.getAllFlowers();
        setFlowers(allFlowers);
        if (allFlowers.length === 0) {
            console.log("No flowers found in LocalStorage.");
        }
    };

    useEffect(() => {
        if (!isAdmin) {
            navigate('/');
        }
        loadFlowers();
    }, [isAdmin, navigate]);

    const handleDelete = (id, name) => {
        if (window.confirm(`Are you sure you want to delete the flower: ${name}?`)) {
            flowerService.deleteFlower(id);
            alert(`Flower "${name}" deleted successfully.`);
            
            loadFlowers(); 
        }
    };

    return (
        <div className="admin-page-wrapper">
            <h1 className="admin-title">Admin Dashboard: Flower Management</h1>
            
            <Link to="/admin-crud/new" className="admin-add-btn">
                <FaPlus /> Create New Flower
            </Link>

            {flowers.length === 0 ? (
                <p className="no-flowers">No flowers found. Please create one!</p>
            ) : (
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flowers.map((flower) => (
                            <tr key={flower.id}>
                                <td className="table-image">
                                    {/* CORRECCIÓN: Usando 'flower.image' para la miniatura */}
                                    <img src={flower.image || '/placeholder.jpg'} alt={flower.name} />
                                </td>
                                <td>{flower.name}</td>
                                <td>{flower.price}</td>
                                <td>{flower.category}</td>
                                <td className="small-text">{flower.id.substring(0, 8)}...</td>
                                <td className="table-actions">
                                    <button 
                                        onClick={() => navigate(`/admin-crud/edit/${flower.id}`)} 
                                        className="action-edit"
                                        title="Edit"
                                    >
                                        <FaEdit /> Edit {/* 👈 TEXTO AÑADIDO */}
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(flower.id, flower.name)} 
                                        className="action-delete"
                                        title="Delete"
                                    >
                                        <FaTrash /> Delete {/* 👈 TEXTO AÑADIDO */}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminDashboard;