import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validateProduct } from "../../../utils/validateProduct";
import { uploadImage } from "../../../services/uploadImage";
import { createProduct, getProducts, deleteProduct } from "../../../services/productsService";
import { ProductFormUI } from "./ProductFormUI";
import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "Urbana",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProductsList(data);
    } catch (error) {
      console.error("Error al cargar lista de productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateProduct(product, file);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const imageUrl = await uploadImage(file);
      const newProduct = {
        title: product.title.trim(),
        price: Number(product.price),
        category: product.category,
        description: product.description.trim(),
        image: imageUrl,
      };

      const newId = await createProduct(newProduct);
      navigate(`/admin/products/success/${newId}`);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProductsList(productsList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <>
      <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onChange={handleChange}
        onFileChange={handleFileChange}
        onSubmit={handleSubmit}
      />

      <section className="admin-products-list">
        <h3>Productos cargados en la tienda ({productsList.length})</h3>
        <div className="admin-list-grid">
          {productsList.map((item) => (
            <div key={item.id} className="admin-product-row">
              <img src={item.image} alt={item.title} />
              <div className="admin-product-info">
                <strong>{item.title}</strong>
                <span>${Number(item.price).toLocaleString("es-AR")} — {item.category}</span>
              </div>
              <button
                type="button"
                className="btn-delete-admin"
                onClick={() => handleDelete(item.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
