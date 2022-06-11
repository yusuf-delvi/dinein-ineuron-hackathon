import { useRequest } from "ahooks";
import { useEffect, useState } from "react";

const dummyTables = [
  {
    id: "1",
    capacity: "Table 1",
  },
  {
    id: "2",
    capacity: "Table 2",
  },
];

async function getTables() {
  return fetch("/api/tables")
    .then((res) => res.json())
    .then((data) => data.tables);
}

export function useTables(
  { activeOrders } = {
    activeOrders: [],
  }
) {
  const { data, error, loading } = useRequest(getTables);

  console.log("tables", data, error, loading);

  const activeTables = activeOrders?.map((order) => order.tableId);
  const updatedTables = data?.map((table) => {
    return {
      ...table,
      isOccupied: activeTables?.includes(table.id),
    };
  });

  return {
    data: updatedTables,
    error,
    loading,
  };
}
