import { useCart } from "../../providers/CartContext";

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <article className="cart-item-card">
      <img src={item.image} alt={item.title} className="cart-item-img" />
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p className="cart-item-price">
          Precio unitario: ${Number(item.price).toLocaleString("es-AR")}
        </p>
        <p className="cart-item-qty">Cantidad: {item.quantity}</p>
        <p className="cart-item-subtotal">
          Subtotal: ${(item.price * item.quantity).toLocaleString("es-AR")}
        </p>
      </div>
      <button
        className="btn-delete-item"
        onClick={() => removeItem(item.id)}
      >
        Eliminar producto
      </button>
    </article>
  );
};
