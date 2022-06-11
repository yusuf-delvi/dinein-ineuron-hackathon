import { useRouter } from "next/router";
import { useEffect } from "react";
import { Box } from '@mui/material'
import { Chip } from '@mui/material'
import  MenuList  from "../menu";
import { width } from "@mui/system";
export default function OrderStatusById() {
  const { query, push } = useRouter();

  useEffect(() => {
    // if (!query.id) {
    //   push("/menu");
    // }
  }, [query.id]);

  const id = query.id;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'ebf5ee',
      width: '100%',
      height: '100%',
      // justifyContent: 'center',
    }}>
      <h1>Order Status</h1>
      <Box sx={{
        backgroundColor: '#fcd469',
        color:'#22272b',
        fontFamily:'Poppins',
        padding: '10px',
        width: '80%',
        minWidth: '355px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
      }}>
          <h2>Order Placed</h2>
          <h5><Chip 
          sx={{
            backgroundColor: '#22272b',
            color: '#ebf5ee',
          }}
          label={`Table No. ${id} Booked`}></Chip></h5>
      </Box>
      <h2>Explore More Items</h2>
      <Box sx={{
          width:'80%',
          minWidth: '380px',
        }}>
        <MenuList />
      </Box>
    </Box>
  );
}
