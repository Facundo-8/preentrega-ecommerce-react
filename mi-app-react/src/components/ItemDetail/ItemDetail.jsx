import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    if (!item) return null;

    const handleOnAdd = (quantity) => {
        addToCart(item, quantity);
        alert(`¡Agregaste ${quantity} un. de "${item.title}" al carrito!`);
    };

    return (
        <article className="detalle-producto-card">
            <div className="detalle-img-container">
                <img src={item.image} alt={item.title} className="detalle-img" />
            </div>
            <div className="detalle-info-container">
                <h2 className="detalle-titulo">{item.title}</h2>
                <p className="detalle-descripcion">{item.description}</p>
                <p className="detalle-precio">${item.price.toLocaleString('es-AR')}</p>
                <ItemCount stock={5} onAdd={handleOnAdd} />
            </div>
        </article>
    );
};
