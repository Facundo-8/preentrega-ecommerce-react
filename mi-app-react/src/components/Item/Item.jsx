import "./Item.css";

export const Item = ({ title, price, description, image }) => {
    return (
        <article className="producto-card">
            <img src={image} className="producto-img" alt={title} />
            <h3 className="producto-titulo">{title}</h3>
            <p className="producto-descripcion">{description}</p>
            <p className="producto-precio">${price.toLocaleString('es-AR')}</p>
            <button className="producto-btn">Ver Detalle</button>
        </article>
    );
};
