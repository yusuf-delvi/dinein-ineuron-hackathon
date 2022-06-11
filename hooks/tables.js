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

export function useTables(
  { activeOrders } = {
    activeOrders: [],
  }
) {
  const [tables, setTables] = useState(([] = dummyTables));

  useEffect(() => {
    fetch("/api/tables")
      .then((res) => res.json())
      .then((data) => {
        const activeTables = activeOrders?.map((order) => order.tableId);
        console.log("activeTables", activeTables);
        const updatedTables = data?.map((table) => {
          return {
            ...table,
            isOccupied: activeTables.includes(table.id),
          };
        });

        setTables(updatedTables);
      });
  }, []);

  return [tables];
}
