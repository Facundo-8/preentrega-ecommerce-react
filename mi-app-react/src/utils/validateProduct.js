export const validateProduct = (product, file) => {
  const errors = {};

  if (!product.title || product.title.trim().length < 3) {
    errors.title = "El nombre debe tener al menos 3 caracteres.";
  }

  if (!product.price || Number(product.price) <= 0) {
    errors.price = "El precio debe ser un número mayor a 0.";
  }

  if (!product.category || product.category.trim() === "") {
    errors.category = "Selecciona una categoría válida.";
  }

  if (!product.description || product.description.trim().length < 10) {
    errors.description = "La descripción debe tener al menos 10 caracteres.";
  }

  if (!file) {
    errors.file = "Debes seleccionar una imagen para la zapatilla.";
  }

  return errors;
};
