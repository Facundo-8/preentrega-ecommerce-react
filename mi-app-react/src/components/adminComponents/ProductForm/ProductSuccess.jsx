import { Link, useParams } from "react-router-dom";
import "./ProductSuccess.css";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="product-success-section">
      <div className="product-success-card">
        <h2>¡Producto guardado con éxito!</h2>
        <p>La zapatilla ya se encuentra disponible en tu tienda.</p>
        <p className="product-id-badge">
          ID en Firebase: <span>{id}</span>
        </p>
        <div className="success-actions">
          <Link to="/admin" className="btn-secondary">
            Cargar otra zapatilla
          </Link>
          <Link to="/" className="btn-primary-link">
            Ir al catálogo
          </Link>
        </div>
      </div>
    </section>
  );
};
