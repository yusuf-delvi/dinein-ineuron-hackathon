// restuarant user cart hook

import { useLocalStorageState } from "ahooks";
import { useEffect } from "react";
import { useTableNumber } from "./tables";
// import { doc, onSnapshot } from "firebase/firestore";
// import { firestore } from "../firebase/config";

export function useCart() {
  const [tableNumber] = useTableNumber();

  // const unsub = onSnapshot(doc(firestore, "activeOrders"), (doc) => {
  //   console.log("Current data: ", doc.data());
  // });

  const [cartItems, setCartItems] = useLocalStorageState(
    `cart-table-${tableNumber}`,
    {
      defaultValue: {},
    }
  );

  // useEffect(() => {
  //   return () => unsub();
  // }, []);

  const addToCart = (item) => {
    setCartItems({
      ...cartItems,
      [item.id]: {
        ...item,
        quantity: cartItems[item.id] ? cartItems[item.id].quantity + 1 : 1,
      },
    });
  };

  const removeFromCart = (item) => {
    if (cartItems[item.id] && cartItems[item.id].quantity == 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else if (cartItems[item.id] && cartItems[item.id].quantity > 1) {
      setCartItems({
        ...cartItems,
        [item.id]: {
          ...item,
          quantity: cartItems[item.id] ? cartItems[item.id].quantity - 1 : 0,
        },
      });
    }
  };

  const clearCart = () => {
    setCartItems({});
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
}
