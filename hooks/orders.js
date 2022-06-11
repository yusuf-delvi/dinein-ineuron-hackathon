import { useRequest } from "ahooks";

const dummyActiveOrders = [
  {
    id: "1",
    tableId: "1",
    userId: "1",
    items: [
      {
        id: 1,
        name: "Pizza",
        description:
          "A pizza is a flatbread typically topped with tomato sauce and cheese and baked in an oven.",
        price: "$10.99",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        category: "Pizza",
        tags: ["Pizza", "Cheese", "Tomato Sauce"],
        isVeg: true,
      },
    ],
  },
];

const dummyOrderHistory = [
  {
    id: "1",
    tableId: "1",
    userId: "1",
    items: [],
    orderTotal: "$0.00",
  },
];

async function getActiveOrders() {
  return fetch("/api/orders/active")
    .then((res) => res.json())
    .then((res) => {
      return res.orders?.length ? res.orders : dummyActiveOrders;
    });
}

export function useActiveOrders() {
  return useRequest(getActiveOrders);
}
