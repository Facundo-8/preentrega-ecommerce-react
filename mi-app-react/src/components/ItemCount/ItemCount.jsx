import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ initial = 1, stock = 5, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="contador-container">
            <div className="contador-controles">
                <button className="contador-btn" onClick={decrement}>-</button>
                <span className="contador-numero">{quantity}</span>
                <button className="contador-btn" onClick={increment}>+</button>
            </div>
            <button className="contador-btn-agregar" onClick={() => onAdd(quantity)}>
                Agregar al Carrito
            </button>
        </div>
    );
};
