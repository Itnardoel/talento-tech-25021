export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "", name: "Todos", icon: "Grid3x3" },
  { id: "notebooks", name: "Notebooks", icon: "Laptop" },
  { id: "smartphones", name: "Smartphones", icon: "Smartphone" },
  { id: "headphones", name: "Audio", icon: "Headphones" },
  { id: "accessories", name: "Accesorios", icon: "Gamepad2" },
];
