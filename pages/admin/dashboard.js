import React from "react";
import Card from "@mui/material/Card";
import styles from "../../styles/Restaurant.module.css";
import Chip from "@mui/material/Chip";

import { useActiveOrders } from "../../hooks/orders";
import { useTables } from "../../hooks/tables";

const Table = () => {
  return (
    <Card sx={{}}>
      <span>Table Name</span>
      <Chip label="Booked" />
    </Card>
  );
};

const Restaurant = () => {
  const {
    data: activeOrders,
    loading: activeOrderLoading,
    error: activeOrdersError,
  } = useActiveOrders();

  const {
    data: activeTables,
    loading: activeTablesLoading,
    error: activeTablesError,
  } = useTables({ activeOrders });

  if (activeOrderLoading) {
    return <div>Loading...</div>;
  }

  if (activeOrdersError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Restaurant</h1>
      <div className={styles.main}>
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
      <h2>Active Tables</h2>
      <pre>
        <code>{JSON.stringify(activeTables, null, 2)}</code>
      </pre>
      <div>
        <h2>Active Orders</h2>
        <pre>
          <code>{JSON.stringify(activeOrders, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default Restaurant;
