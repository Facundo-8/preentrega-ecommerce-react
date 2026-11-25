import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudo encontrar la zapatilla solicitada.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="item-detail-container">
      {loading && <p className="loading-message">Cargando detalle...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && product && <ItemDetail item={product} />}
    </section>
  );
};
