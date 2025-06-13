export interface Product {
  createdAt: string;
  name: string;
  avatar: string;
  price: string;
  description: string;
  id: string;
}

export type ProductToAdd = Omit<Product, "id" | "createdAt" | "avatar">;

export interface ProductInCart extends Product {
  quantity: number;
}
