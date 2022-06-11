import React from "react";
import Card from "@mui/material/Card";
import styles from "../../styles/Restaurant.module.css";
import Chip from "@mui/material/Chip";
import { useActiveOrders } from "../../hooks/orders";
import { useTables } from "../../hooks/tables";
import Button from '@mui/material/Button';

const Table = ({ table }) => {
  return (
    <div className={styles.main}>
      <Card className={styles.table}>
        <span>Table - #{table.id}</span>
        <span>Capacity - {table.capacity}</span>
        <Chip label={table.isOccupied ? "Occupied" : "Free"} />
        <Button variant="contained">LogOut</Button>
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
      <div className={styles.main}>
        {!activeTablesLoading &&
          activeTables.map((table) => <Table key={table.id} table={table} />)}
      </div>
      </div>
      <div>
     

      </div>
      
      
      <div>
        <h2>Order History</h2>
          
      </div>
    </div>
  );
};

export default Restaurant;
