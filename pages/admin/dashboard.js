import React from "react";
import Card from "@mui/material/Card";
import styles from "../../styles/Restaurant.module.css";
import Chip from "@mui/material/Chip";
import { useActiveOrders } from "../../hooks/orders";
import { useTables } from "../../hooks/tables";

const Table = () => {
  return (
    <div className={styles.main}>
    <Card className={styles.table}>
      <span>Table Name</span>
      <Chip label="Booked" />
    </Card>
    </div>
   
  );
};

const Restaurant = () => {
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
      <h1>Restaurant</h1>
      <h2>Tables</h2>
      <div className={styles.main}>
        <Table />
        <Table />
        <Table />
        <Table />
        <h2>Orders</h2>
      </div>
    </div>
  );
};

export default Restaurant;
