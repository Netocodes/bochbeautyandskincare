import { createContext } from "react";

export type Product = {
  
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  imageUrl: string;
  quantity: number;
  rating: { rate: number; count: number };
};
export type CartContextType = {
  cartItems: Product[];
  like: Product[];
  UpdateQuantity: (productId: number, quantity: number) => void;
  TotalPrice: () => number;
  addToCart: (item: Product, quantity: number) => void;
  likePost: (item: Product) => void;
  RemoveCart: (itemId: number) => void;
};
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
