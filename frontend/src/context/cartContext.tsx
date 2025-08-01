import { createContext } from "react";
import { Product } from "../components/ppProducts";
export type CartContextType = {
  cartItems: Product[];
  like: Product[];
  UpdateQuantity: (productId: number, quantity: number) => void;
  TotalPrice: () => number;
  addToCart: (item: Product, quantity: number) => void;
  likePost: (item: Product) => void;
  RemoveCart: (itemId: number) => void;
  clearCart: () => void;
};
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
