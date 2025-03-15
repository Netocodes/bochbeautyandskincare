import { ReactNode, useEffect, useState } from "react";
import { Product } from "./cartContext";
import { CartContext } from "./cartContext";
import { Toaster, toast } from "sonner";
type providerType = { children: ReactNode };
export const CartProvider = ({ children }: providerType) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [like, setLiked] = useState<Product[]>([]);
 
  useEffect(() => {
  window.localStorage.setItem("ProductCart", JSON.stringify(cartItems))
  // console.log("Sent Items to local Storage")
  }, [cartItems]);

  const data = window.localStorage.getItem("ProductCart")
 useEffect(() => {
   if(data !== null){ const dataAch = JSON.parse(data);
    
    setCartItems(dataAch)
   }
 }, [])

  const addToCart = (item: Product, quantity: number) => {
    if (item !== null && item !== undefined) {
      const isInTheCart = cartItems.some((cartItem) => cartItem.id == item.id);
      if (isInTheCart) {
        toast.warning(
          "Item is Already in Your cart, Click on the cart icon to update Quantity"
        );
      
      } else {
        // console.log(`added Suscefully`);
        setCartItems((prevItems) => [...prevItems, { ...item, quantity }]);
        toast.success("Item added to cart");
      }
    }
  };
  const UpdateQuantity = (productId: number, quantity: number) => {
    const UpdatedCart = cartItems.map((prevItem) =>
      prevItem.id === productId ? { ...prevItem, quantity: quantity } : prevItem
    );
    setCartItems(UpdatedCart);
    toast.warning(`you have added "${quantity}"of this product to your cart`);
  };
  const TotalPrice = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };
  const likePost = (item: Product) => {
    const isInLiked = cartItems.some((items) => items.id === item.id);
    if (isInLiked) {
      alert("Youve Added This already");
    } else {
      setLiked((prevLiked) => [...prevLiked, item]);
      toast.success("Added to Favorite");
    }
  };
  const RemoveCart = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    return updatedCart;
  };
  const clearCart = () => {
    setCartItems([])
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        like,
        UpdateQuantity,
        TotalPrice,
        addToCart,
        likePost,
        RemoveCart,
        clearCart,
      }}
    >
      {children}
      <Toaster
        richColors
        className="mt-24 md:mt-12 lg:mt-20 z-50"
        position="top-right"
      />
      ;
    </CartContext.Provider>
  );
};
