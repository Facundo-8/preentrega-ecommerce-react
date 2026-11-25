export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section className="product-form-section">
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar Producto</h2>

        <div className="form-group">
          <label htmlFor="title">Nombre de la zapatilla</label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Ej: Nike Air Max 90"
            value={product.title}
            onChange={onChange}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio ($ ARS)</label>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="Ej: 125000"
            value={product.price}
            onChange={onChange}
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={onChange}
          >
            <option value="urbana">Urbana</option>
            <option value="outdoor">Outdoor</option>
            <option value="running">Running</option>
          </select>
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            placeholder="Describe las características del calzado..."
            value={product.description}
            onChange={onChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="image">Imagen</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>

        <button className="btn-bg-primary" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
};
