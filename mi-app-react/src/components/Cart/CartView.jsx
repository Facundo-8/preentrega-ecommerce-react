import { Link } from "react-router-dom";
import { useCart } from "../../providers/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Cart.css";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>Carrito de compras</h1>
      {cart.length ? (
        <div className="cart-content">
          <CartList />
          <CartSummary />
        </div>
      ) : (
        <div className="empty-cart-box">
          <p className="empty-cart">El carrito está vacío</p>
          <Link className="btn-back" to="/">
            Volver
          </Link>
        </div>
      )}
    </section>
  );
};
