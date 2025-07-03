export interface Product {
  avatar: string;
  category: string;
  createdAt: string;
  description: string;
  editedAt: string;
  id: string;
  name: string;
  price: string;
}

export type ProductToAdd = Omit<Product, "id" | "createdAt" | "editedAt"> &
  Partial<Pick<Product, "createdAt" | "editedAt">>;

export type ProductToEdit = Omit<Product, "createdAt">;

export interface ProductInCart extends Product {
  quantity: number;
}
