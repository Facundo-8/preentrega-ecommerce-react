import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const addToCart = (item, quantity) => {
    const existingIndex = cart.findIndex((prod) => prod.id === item.id);

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }

    showToast(`Agregaste ${quantity}x ${item.title} al carrito`, "info");
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
    showToast("Producto eliminado del carrito", "warning");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  const checkout = () => {
    clearCart();
    showToast("¡Compra realizada con éxito! Gracias por elegirnos.", "success");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getCartQuantity,
        getCartTotal,
        checkout,
      }}
    >
      {children}

      {toast && (
        <div className={`custom-toast toast-${toast.type}`}>
          <span className="toast-icon">
            {toast.type === "success" ? "✓" : toast.type === "warning" ? "✕" : "🛒"}
          </span>
          <p>{toast.message}</p>
        </div>
      )}
    </CartContext.Provider>
  );
};
