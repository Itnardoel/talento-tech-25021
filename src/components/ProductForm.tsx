import { useState } from "react";

import type { ProductToAdd } from "@/types/product-type";

interface ProductFormProps {
  loading: boolean;
  error: string | null;
  onAddProduct: (product: ProductToAdd) => Promise<void>;
}

interface Errors {
  name?: string;
  price?: string;
  description?: string;
}

export const ProductForm = ({
  onAddProduct,
  loading,
  error,
}: ProductFormProps) => {
  const [product, setProduct] = useState<ProductToAdd>({
    name: "",
    price: "",
    description: "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validarFormulario()) {
      setProduct(product);

      onAddProduct(product);
      setProduct({
        name: "",
        price: "",
        description: "",
      });
      setErrors({});
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Agregar Producto</h2>

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
        {loading ? "Agregando producto..." : "Agregar producto"}
      </button>
      {error && <p className="content-center text-red-500">{error}</p>}
    </form>
  );
};
