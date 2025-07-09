import { useState } from "react";
import { useNavigate } from "react-router";

import { useProduct } from "@/features/product/hooks/use-product";
import { categories } from "@/features/product-filter/const/categories";
import type {
  Product,
  ProductToAdd,
  ProductToEdit,
} from "@/shared/types/product-type";

interface Errors {
  avatar?: string;
  category?: string;
  description?: string;
  name?: string;
  price?: string;
}

interface ProductFormProps {
  productForEdit?: Product;
}

export const AdminProductForm = ({ productForEdit }: ProductFormProps) => {
  const [product, setProduct] = useState<ProductToAdd | ProductToEdit>({
    avatar: productForEdit?.avatar ?? "",
    category: productForEdit?.category ?? "",
    description: productForEdit?.description ?? "",
    name: productForEdit?.name ?? "",
    price: productForEdit?.price ?? "",
  });
  const [errors, setErrors] = useState<Errors>({
    avatar: "",
    category: "",
    description: "",
    name: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { addProduct, editProduct, error } = useProduct();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validarFormulario() && !productForEdit) {
      setLoading(true);
      await addProduct({
        ...product,
        createdAt: new Date().toISOString(),
        editedAt: new Date().toISOString(),
      });

      setProduct({
        avatar: "",
        category: "",
        description: "",
        name: "",
        price: "",
      });

      setErrors({});
      setLoading(false);

      return;
    }

    if (validarFormulario() && productForEdit) {
      setLoading(true);

      await editProduct({
        ...product,
        id: productForEdit.id,
        editedAt: new Date().toISOString(),
      });

      setErrors({});
      setLoading(false);

      navigate(`/product/${productForEdit.id}`);

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

    if (!product.description.trim() || product.description.length < 10) {
      draftErrors.description =
        "La descripción debe tener al menos 10 caracteres.";
    }

    if (!product.category) {
      draftErrors.category = "Se debe elegir una categoría.";
    }

    try {
      new URL(product.avatar);
    } catch {
      draftErrors.avatar = "La imagen debe ser una URL válida.";
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
    <form
      onSubmit={(event) => void handleSubmit(event)}
      className="flex w-full max-w-80 flex-col gap-2 py-6 lg:py-0"
    >
      <h2 className="text-2xl font-bold">
        {productForEdit ? "Editar producto" : "Agregar producto"}
      </h2>

      <label className="flex flex-col gap-1 rounded-md">
        Nombre
        <input
          type="text"
          name="name"
          inputMode="text"
          autoComplete="off"
          value={product.name}
          onChange={handleChange}
          className="rounded border px-2 py-1"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </label>

      <label className="flex flex-col gap-1 rounded-md">
        Precio
        <input
          type="number"
          name="price"
          inputMode="numeric"
          value={product.price}
          onChange={handleChange}
          className="rounded border px-2 py-1"
        />
        {errors.price && <p className="text-red-500">{errors.price}</p>}
      </label>

      <label className="flex flex-col gap-1 rounded-md">
        Imagen
        <input
          type="text"
          name="avatar"
          inputMode="url"
          value={product.avatar}
          onChange={handleChange}
          className="rounded border px-2 py-1"
        />
        {errors.avatar && <p className="text-red-500">{errors.avatar}</p>}
      </label>

      <label className="flex flex-col gap-1 rounded-md">
        Descripción
        <textarea
          name="description"
          inputMode="text"
          value={product.description}
          onChange={handleChange}
          className="rounded border px-2 py-1"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description}</p>
        )}
      </label>

      <label className="flex flex-col gap-1 rounded-md">
        Categoría
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="rounded border px-2 py-1"
        >
          <option value="">Seleccionar categoría</option>
          {categories.slice(1).map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-red-500">{errors.category}</p>}
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold whitespace-nowrap text-white shadow-lg transition-colors hover:bg-blue-600/90 hover:shadow-xl"
      >
        {actionLabel}
      </button>
      {error && <p className="content-center text-red-500">{error}</p>}
    </form>
  );
};
