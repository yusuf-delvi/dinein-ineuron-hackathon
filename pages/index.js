import Head from 'next/head';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLocalStorageState } from "ahooks";

export default function Home({}) {
  const {
    query: { table },
    push,
  } = useRouter();
  const [_, setTable] = useLocalStorageState({
    table: "",
  });

  useEffect(() => {
    if (!table) {
      push("/");
    } else {
      setTable(table);
    }
  }, []);

  return <div>
    <div>
      <img src="/logo.svg" width={300} />
      
    </div>

  </div>;
}
