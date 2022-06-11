import { useLocalStorageState, useRequest } from "ahooks";

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

export function useTableNumber() {
  const [tableNumber, setTableNumber] = useLocalStorageState("tableNumber", {
    defaultValue: "",
  });

  return [tableNumber, setTableNumber];
}
