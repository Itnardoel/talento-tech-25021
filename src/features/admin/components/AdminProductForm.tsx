import { useState } from "react";

import { useProduct } from "@/features/product/hooks/use-product";
import type {
  Product,
  ProductToAdd,
  ProductToEdit,
} from "@/shared/types/product-type";

interface Errors {
  name?: string;
  price?: string;
  description?: string;
}

interface ProductFormProps {
  productForEdit?: Product;
}

export const AdminProductForm = ({ productForEdit }: ProductFormProps) => {
  const [product, setProduct] = useState<ProductToAdd | ProductToEdit>({
    name: productForEdit?.name ?? "",
    price: productForEdit?.price ?? "",
    description: productForEdit?.description ?? "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: "",
    price: "",
    description: "",
  });

  const { addProduct, editProduct, error, loading } = useProduct();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validarFormulario() && !productForEdit) {
      addProduct(product);
      setProduct({
        name: "",
        price: "",
        description: "",
      });
      setErrors({});
      return;
    }

    if (validarFormulario() && productForEdit) {
      editProduct({ ...product, id: productForEdit.id });
      setErrors({});
      return;
    }
  };

  const validarFormulario = () => {
    const draftErrors: Errors = {};

    if (!product.name.trim()) {
      draftErrors.name = "El nombre es obligatorio.";
    }
    if (!product.price || Number(product.price) <= 0) {
      draftErrors.price = "El precio debe ser mayor a 0.";
    }
    if (!product.description.trim() || product.description.length < 10) {
      draftErrors.description =
        "La descripción debe tener al menos 10 caracteres.";
    }
    setErrors(draftErrors);
    return Object.keys(draftErrors).length === 0;
  };

  const actionLabel = loading
    ? productForEdit
      ? "Editando producto..."
      : "Agregando producto..."
    : productForEdit
      ? "Editar producto"
      : "Agregar producto";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">
        {productForEdit ? "Editar Producto" : "Agregar Producto"}
      </h2>

      <label className="flex flex-col gap-1 rounded-md">
        Nombre:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="border px-2 py-1"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </label>

      <label className="flex flex-col gap-1 rounded-md">
        Precio:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="border px-2 py-1"
        />
        {errors.price && <p className="text-red-500">{errors.price}</p>}
      </label>

      <label className="flex flex-col gap-1 rounded-md">
        Descripción:
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="border px-2 py-1"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description}</p>
        )}
      </label>

      <button
        type="submit"
        className="cursor-pointer rounded-lg bg-gray-500 px-4 py-2"
      >
        {actionLabel}
      </button>
      {error && <p className="content-center text-red-500">{error}</p>}
    </form>
  );
};
