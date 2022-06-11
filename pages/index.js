import Head from 'next/head';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLocalStorageState } from "ahooks";
import { useTableNumber } from "../hooks/tables";
import { Box } from "@mui/material";
import { Button } from "../components/Button";

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

  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
    }}
  >
    <img src="/logo.svg" width={300} />
    <Box
      sx={{
        marginTop: "75px",
      }}
    >
      <img
        width={300}
        height={200}
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
    </Box>
    <Box
      sx={{
        marginTop: "75px",
      }}
    >
      <Button
        onClick={() => {
          push("/login");
        }}
      >
        Let's Go
      </Button>
    </Box>
  </Box>
  );
}
