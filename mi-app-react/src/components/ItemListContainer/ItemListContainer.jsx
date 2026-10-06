import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
        .then((res) => {
            if(!res.ok) {
                throw new Error("Error al cargar los productos"); 
            }
            return res.json();
        })
        .then((data) => {
            if (idCategory) {
                const filtrados = data.filter((prod) => prod.category === idCategory);
                setProducts(filtrados);
            } else {
                setProducts(data);
            }
        })
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
    }, [idCategory]);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return ( 
        <section>
            <ItemList products={products} />
        </section>
    );
};
