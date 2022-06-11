import React from "react";
import Card from "@mui/material/Card";
import styles from "../../styles/Restaurant.module.css";
import Chip from "@mui/material/Chip";
import { useActiveOrders } from "../../hooks/orders";
import { useTables } from "../../hooks/tables";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { borderRadius } from "@mui/system";

const Table = ({ table }) => {
  return (
    <Box sx={{
      width: '400px',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      margin: '20px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      padding: '20px 10px',
    }}>
      <Box sx={{
        backgroundColor: '#22272b',
        padding: '20px 10px',
        margin: '15px',
        color: '#fff',
        display:'flex',
        alignItems: 'center',
        borderRadius:'10px',
        
      }}>
        #{table.id}
      </Box>

      <Box sx={{
        display:'flex',
        flexDirection: 'column',
        padding: '15px 10px',
        
      }}>
        <span>Capacity - {table.capacity}</span>
        <Chip sx={{
          marginTop: "10px",
          backgroundColor: '#00a600',
          color: '#fff'
        }} label={table.isOccupied ? "Occupied" : "Free"} />
        <Button variant="contained" sx={{
          marginTop: "10px",
          backgroundColor: '#fcd469',
          color: '#000'
        }}>LogOut</Button>
      </Box>
      {/* <Card className={styles.table}>
        
        <span>Capacity - {table.capacity}</span>
        <Chip sx={{
          marginTop:"10px",
          backgroundColor:'#22272b',
          color:'#fff'
      }} label={table.isOccupied ? "Occupied" : "Free"} />
        <Button variant="contained" sx={{
          backgroundColor:'#fcd469',
          color:'#000'
      }}>LogOut</Button>
      </Card> */}
    </Box>
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
      <Box sx={{
        backgroundColor: "#fcd469",
        padding: "10px 35px",
        margin: '15px',
        borderRadius: '20px',
        color: "#22272b",
      }}>
        <h1>Restaurant</h1>
      </Box>
      <Box sx={{
        margin: '20px',
        borderRadius: '20px',
        color: "#22272b",
      }}>
        <h2>Tables</h2>
        <div className={styles.main}>
          {!activeTablesLoading &&
            activeTables.map((table) => <Table key={table.id} table={table} items={[]}/>)}
        </div>
      </Box>


      <Box sx={{
        margin: '20px',
        borderRadius: '20px',
        color: "#22272b",
      }}>
        <div>
          <h2>Order History</h2>

        </div>
      </Box>


    </div>
  );
};

export default Restaurant;
