import { createContext, ReactNode, useContext, useState } from "react";
import { Toaster, toast } from "sonner";
type providerType = { children: ReactNode };
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  rating: { rate: number; count: number };
};
const CartContext = createContext<
  | {
      cartItems: Product[];
      like: Product[];
      addToCart: (item: Product) => void;
      likePost: (item: Product) => void;
    }
  | undefined
>(undefined);
export const CartProvider = ({ children }: providerType) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [like, setLiked] = useState<Product[]>([]);

  <Toaster
    richColors
    className="mt-24 md:mt-12 lg:mt-20 z-50"
    position="top-right"
  />;
  const addToCart = (item: Product) => {
    if (item !== null && item !== undefined) {
      const isInTheCart = cartItems.some((cartItem) => cartItem.id == item.id);
      if (isInTheCart) {
        toast.warning("Item is Already in Your cart");
      } else {
        console.log(`added Suscefully`);
        setCartItems((prevItems) => [...prevItems, item]);
        toast.success("Item added to cart");
      }
    }
  };
  const likePost = (item: Product) => {
    setLiked((prevLiked) => [...prevLiked, item]);
    toast.success("Added to Favorite");
  };

  return (
    <CartContext.Provider value={{ cartItems, like, addToCart, likePost }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
