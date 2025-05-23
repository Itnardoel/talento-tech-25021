export interface Product {
  createdAt: string;
  name: string;
  avatar: string;
  price: string;
  description: string;
  id: string;
}

export interface ProductInCart extends Product {
  quantity: number;
}
