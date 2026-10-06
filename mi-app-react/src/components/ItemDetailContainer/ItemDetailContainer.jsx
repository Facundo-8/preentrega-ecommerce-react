import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al cargar el producto");
                }
                return res.json();
            })
            .then((data) => {
                const encontrado = data.find((prod) => prod.id === parseInt(id));
                if (!encontrado) {
                    throw new Error("Producto no encontrado");
                }
                setProduct(encontrado);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando detalle...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section>
            <ItemDetail item={product} />
        </section>
    );
};
