import { useState, useEffect } from "react";
import { useActiveOrders } from "../../hooks/orders";
import { useTables } from "../../hooks/tables";
export default function Dashboard() {
  const {
    data: activeOrders,
    loading: activeOrderLoading,
    error: activeOrdersError,
  } = useActiveOrders();

  const [tables] = useTables({ activeOrders });

  if (activeOrderLoading) {
    return <div>Loading...</div>;
  }

  if (activeOrdersError) {
    return <div>Error</div>;
  }

  console.log("activeOrders", activeOrders);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Active Orders:</h2>
      <div>{JSON.stringify(activeOrders)}</div>

      <h2>Tables</h2>
      <div>{JSON.stringify(tables)}</div>
    </div>
  );
}
