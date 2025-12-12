// src/context/CartContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('flower_fantasy_cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem('flower_fantasy_cart', JSON.stringify(cartItems));
    }, [cartItems]);



    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };


    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };
    

    const clearCart = () => {
        setCartItems([]);
    };


    const updateQuantity = (productId, newQuantity) => {
        setCartItems(prevItems => {

            if (newQuantity <= 0) {
                return prevItems.filter(item => item.id !== productId);
            }


            return prevItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
        });
    };


    // El valor que se proveerá a todos los componentes hijos
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity, // 👈 ¡CLAVE! Pásala aquí
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

// 3. Crear un Hook personalizado para usar el carrito fácilmente
export const useCart = () => {
    return useContext(CartContext);
};