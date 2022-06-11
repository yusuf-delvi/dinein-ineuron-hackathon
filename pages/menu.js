import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { menuItems } from "../dummy_data";
import { useCart } from "../hooks/cart";
import { usePlaceOrder } from "../hooks/orders";
import { Loader } from "../components/Loader";
import { Box, Typography } from "@mui/material";
import { Button } from "../components/Button";

const VegNonVegMark = ({ isVeg } = { isVeg: true }) => {
  return (
    <Box
      sx={{
        borderRadius: "5px",
        border: `1px solid ${isVeg ? "green" : "red"}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "15px",
        height: "15px",
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          background: isVeg ? "green" : "red",
          width: "8px",
          height: "8px",
        }}
      />
    </Box>
  );
};

const MenuItem = ({ menu }) => {
  return (
    <Card
      elevation={0}
      sx={{
        margin: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box width={110} height={110}>
          <img
            src={
              menu.imageUrl ||
              "https://unsplash.com/photos/rAyCBQTH7ws/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDJ8fHwxNjU0OTQ3Mzky&force=true&w=640"
            }
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              component="h3"
              color={"#232323"}
              fontSize="16px"
              fontWeight={"bold"}
            >
              Pizza
            </Typography>
            <Typography fontSize={"12px"} color="GrayText">
              Prep: 20 mins
            </Typography>

            <VegNonVegMark isVeg={true} />
          </Box>
          <Box
            sx={{
              justifySelf: "flex-end",
            }}
          >
            <Button
              size="small"
              sx={{
                fontSize: "12px",
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const MenuList = ({ menuItems }) => {
  const { addToCart } = useCart();
  const {
    placeOrder,
    loading: placingOrder,
    error: placeOrderError,
    data: orderPlaced,
  } = usePlaceOrder();
  useEffect(() => {
    if (orderPlaced) {
      alert("Order placed");
    }
  }, [orderPlaced]);
  if (placingOrder) {
    return <Loader />;
  }

  return (
    <Box>
      {menuItems.map((menu) => (
        <MenuItem menu={menu} />
      ))}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => placeOrder()}
      >
        Place Order
      </Button>
    </Box>
  );
};

export function getStaticProps() {
  return {
    props: {
      menuItems: menuItems,
    },
  };
}

export default MenuList;
