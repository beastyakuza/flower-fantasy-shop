// src/services/productsLocalService.js

import { v4 as uuidv4 } from 'uuid'; 

const STORAGE_KEY = 'flower_fantasy_products';

const getProducts = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

const saveProducts = (products) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const getAllFlowers = () => {
    return getProducts();
};
export const getFlowerById = (id) => {
    const products = getProducts(); 
    return products.find(flower => flower.id === id); 
};

export const createFlower = (flowerData) => {
    const products = getProducts();
    const newFlower = {
        ...flowerData,
        id: uuidv4(), 
        price: `$${parseFloat(flowerData.price).toFixed(2)}`,
        description: flowerData.description || '', 
    };
    products.push(newFlower);
    saveProducts(products);
    return newFlower;
};

export const updateFlower = (id, updatedData) => {
    let products = getProducts();
    const index = products.findIndex(p => p.id === id);
    
    if (index > -1) {
        const updatedPrice = updatedData.price.startsWith('$') ? updatedData.price : `$${parseFloat(updatedData.price.replace('$', '')).toFixed(2)}`;

        products[index] = {
            ...products[index],
            ...updatedData,
            price: updatedPrice
        };
        saveProducts(products);
        return products[index];
    }
    return null;
};

export const deleteFlower = (id) => {
    const products = getProducts();
    const initialLength = products.length;
    
    const newProducts = products.filter(p => p.id !== id);
    saveProducts(newProducts);
    
    return newProducts.length !== initialLength;
};