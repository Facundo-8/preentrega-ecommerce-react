import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        if (category) {
          const filtered = data.filter(
            (prod) => prod.category?.toLowerCase() === category.toLowerCase()
          );
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error("Error cargando el catálogo:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <section className="item-list-container">
      {greeting && <h1 className="greeting-title">{greeting}</h1>}
      {loading ? (
        <p className="loading-message">Cargando zapatillas...</p>
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
};
