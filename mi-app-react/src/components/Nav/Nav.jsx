import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../providers/CartContext";
import "./Nav.css";

export const Nav = () => {
    const { getCartQuantity } = useContext(CartContext);
    const totalCantidad = getCartQuantity();

    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li><Link to={"/"}>Home</Link></li>
                <li>
                    <Link to={"/cart"}>
                        Carrito {totalCantidad > 0 && <span className="cart-badge">{totalCantidad}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
