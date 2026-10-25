import { createContext, useState } from "react";

const CardContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((items) => {
            const existingProduct = items.find(
                (item) => item.product === product.id
            );

            if (existingProduct) {
                return items.map((item) =>
                    item.product === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...items, { ...product, product: product.id, quantity: 1 }];
        });
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCartItems((items) =>
            items.map((item) =>
                item.product === productId ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((items) =>
            items.filter((item) => item.product !== productId)
        );
    };

    return (
        <CardContext.Provider
            value={{ cartItems, addToCart, updateQuantity, removeFromCart }}
        >
            {children}
        </CardContext.Provider>
    );
};
