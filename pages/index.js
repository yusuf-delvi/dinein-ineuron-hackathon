import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTableNumber } from "../hooks/tables";

export default function Home({}) {
  const {
    query: { table },
    push,
  } = useRouter();
  const [_, setTableNumber] = useTableNumber();
  useEffect(() => {
    if (table) {
      setTableNumber(table);
      push("/login");
    }
  }, [table]);

  return <div>Selected table: {table}</div>;
}
