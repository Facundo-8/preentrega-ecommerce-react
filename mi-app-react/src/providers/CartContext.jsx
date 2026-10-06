import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const itemInCart = cart.find((prod) => prod.id === item.id);

        if (itemInCart) {
            setCart(
                cart.map((prod) =>
                    prod.id === item.id
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod
                )
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const clearCart = () => setCart([]);

    const getCartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, getCartQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
