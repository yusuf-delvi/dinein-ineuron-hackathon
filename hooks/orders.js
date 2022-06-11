import { useRequest } from "ahooks";
import { useRouter } from "next/router";
import { activeOrders, orderHistory } from "../dummy_data";
import { useCart } from "./cart";

async function getActiveOrders() {
  return activeOrders;
}

async function checkoutOrder(orderId) {
  const order = activeOrders.find((order) => order.id === orderId);
  if (order) {
    // delete order from activeOrders
    activeOrders.splice(activeOrders.indexOf(order), 1);
  }
  // add order to order history
  orderHistory.push(order);
}

async function getOrderHistory() {
  return orderHistory;
}

async function placeOrder(items) {
  const order = {
    id: activeOrders.length + 1,
    items,
  };
  activeOrders.push(order);
  return order;
}

export function useCheckoutOrder(orderId) {
  const { run, loading, data } = useRequest(() => checkoutOrder(orderId));
  return { run, loading, data };
}

export function useActiveOrders() {
  return useRequest(getActiveOrders);
}

export function useOrderHistory() {
  return useRequest(getOrderHistory);
}

export function usePlaceOrder() {
  const { cartItems, clearCart } = useCart();
  const { push } = useRouter();

  const { run, loading, data, error } = useRequest(
    () => {
      return placeOrder(cartItems).then((order) => {
        clearCart();
        push(`/orders/${order.id}`);

        return order;
      });
    },
    { manual: true }
  );

  return {
    placeOrder: run,
    loading,
    data,
    error,
  };
}