import React from "react";
import Card from "@mui/material/Card";
import styles from "../../styles/Restaurant.module.css";
import Chip from "@mui/material/Chip";
import { useActiveOrders } from "../../hooks/orders";
import { useTables } from "../../hooks/tables";

const Table = ({}) => {
  return (
    <div className={styles.main}>
    <Card className={styles.table}>
      <span>Table #1 </span>
      <Chip label="Booked" />
    </Card>
    </div>
   
  );
};

export const Restaurant = () => {
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
      <div>
      <h2>Tables</h2>
      <pre>
        <code>{JSON.stringify(activeTables, null, 2)}</code>
      </pre>
      <div className={styles.main}>
        <Table />
        <Table />
        <Table />
        <Table />
       
      </div>
      </div>
      <div>
      <h2>Orders</h2>

      </div>
      
      
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
