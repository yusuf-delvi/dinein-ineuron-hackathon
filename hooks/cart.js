// restuarant user cart hook

import { useLocalStorageState } from "ahooks";

export function useCart() {
  const [cartItems, setCartItems] = useLocalStorageState("cartItems", {
    defaultValue: [],
  });

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
}
