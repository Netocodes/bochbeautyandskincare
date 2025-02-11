import { createContext } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
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
// export const CartProvider = ({ children }: providerType) => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [like, setLiked] = useState<Product[]>([]);

//   useEffect(() => {
//     console.log("Cart Items Updated:", cartItems);
//   }, [cartItems]);

//   const addToCart = (item: Product, quantity: number) => {
//     if (item !== null && item !== undefined) {
//       const isInTheCart = cartItems.some((cartItem) => cartItem.id == item.id);
//       if (isInTheCart) {
//         toast.warning(
//           "Item is Already in Your cart, Click on the cart icon to update Quantity"
//         );
//         // UpdateQuantity(item.id, quantity);
//       } else {
//         console.log(`added Suscefully`);
//         setCartItems((prevItems) => [...prevItems, { ...item, quantity }]);
//         toast.success("Item added to cart");
//       }
//     }
//   };
//   const UpdateQuantity = (productId: number, quantity: number) => {
//     const UpdatedCart = cartItems.map((prevItem) =>
//       prevItem.id === productId ? { ...prevItem, quantity: quantity } : prevItem
//     );
//     setCartItems(UpdatedCart);
//     toast.warning(`you have added "${quantity}"of this product to your cart`);
//   };

//   const likePost = (item: Product) => {
//     setLiked((prevLiked) => [...prevLiked, item]);
//     toast.success("Added to Favorite");
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, like, UpdateQuantity, addToCart, likePost }}
//     >
//       {children}
//       <Toaster
//         richColors
//         className="mt-24 md:mt-12 lg:mt-20 z-50"
//         position="top-right"
//       />
//       ;
//     </CartContext.Provider>
//   );
// };
