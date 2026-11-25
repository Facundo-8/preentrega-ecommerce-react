import { useCart } from "../../providers/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout, clearCart } = useCart();
  const total = getCartTotal();

  return (
    <aside className="cart-summary-box">
      <p className="cart-total-text">
        TOTAL A PAGAR: <span>${total.toLocaleString("es-AR")}</span>
      </p>
      <div className="cart-summary-actions">
        <button className="btn-clear-cart" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button className="btn-checkout" onClick={checkout}>
          Finalizar compra
        </button>
      </div>
    </aside>
  );
};
