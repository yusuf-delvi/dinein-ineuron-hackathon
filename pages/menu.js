import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import { menuItems } from "../dummy_data";
import { useCart } from "../hooks/cart";
import { usePlaceOrder } from "../hooks/orders";
import { Loader } from "../components/Loader";
import { Box, Typography } from "@mui/material";
import { Button } from "../components/Button";
import { useMenuItems } from "../hooks/menu";

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
        marginTop: "15px",
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

const MenuItem = ({
  menu,
  onAddClick = () => null,
  onRemoveClick = () => null,
}) => {
  const { cartItems } = useCart();
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
          <img src={menu.image} width={"100%"} height={"100%"} />
        </Box>
        <Box
          sx={{
            padding: "10px",
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
              {menu.name}
            </Typography>
            <Typography fontSize={"12px"} color="GrayText">
              ₹ <strong>{menu.price}</strong>
            </Typography>

            <VegNonVegMark isVeg={true} />
          </Box>
          <Box
            sx={{
              justifySelf: "flex-end",
            }}
          >
            {cartItems[menu.id] ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Button
                  size="small"
                  sx={{
                    fontSize: "12px",
                    minWidth: "35px",
                    width: "35px",
                  }}
                  onClick={onRemoveClick}
                >
                  -
                </Button>

                <Box width={25} textAlign="center">
                  <Typography variant="subtitle1" color="GrayText">
                    {cartItems[menu.id].quantity}
                  </Typography>
                </Box>
                <Button
                  size="small"
                  sx={{
                    fontSize: "12px",
                    minWidth: "35px",
                    width: "35px",
                  }}
                  onClick={onAddClick}
                >
                  +
                </Button>
              </Box>
            ) : (
              <Button
                size="small"
                sx={{
                  fontSize: "12px",
                }}
                onClick={onAddClick}
              >
                Add
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const MenuList = () => {
  const { addToCart, removeFromCart } = useCart();
  const {
    data: menuItems,
    loading: menuItemsLoading,
    error: menuItemsError,
  } = useMenuItems();
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
  if (placingOrder || menuItemsLoading) {
    return <Loader />;
  }

  return (
    <Box>
      {menuItems.map((menu) => (
        <MenuItem
          menu={menu}
          onAddClick={() => addToCart(menu)}
          onRemoveClick={removeFromCart}
        />
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



export default MenuList;
