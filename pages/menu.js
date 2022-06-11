import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import styles from "../styles/Menu.module.css";
import Button from "@mui/material/Button";
import { menuItems } from "../dummy_data";
import { useCart } from "../hooks/cart";
import { usePlaceOrder } from "../hooks/orders";

// Material UI component to display the menu
const Menu = ({ menuItems }) => {
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
    return <div>Placing order...</div>;
  }
  if (placeOrderError) {
    return <div>Error placing order: {placeOrderError}</div>;
  }

  return (
    <div className={styles.menu}>
      {menuItems.map((item) => (
        <Card key={item.id} className={styles.menuItem}>
          <div className={styles.menuItemName}>{item.name}</div>
          <div className={styles.menuItemDescription}>{item.description}</div>
          <div className={styles.menuItemPrice}>{item.price}</div>
          <div className={styles.menuItemTags}>
            {item.tags.map((tag) => (
              <Chip key={tag} label={tag} className={styles.menuItemTag} />
            ))}
          </div>
          <div className={styles.menuItemIsVeg}>
            {item.isVeg ? "Veg" : "Non-Veg"}
          </div>
          <div className={styles.menuItemActions}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </Button>
          </div>
        </Card>
      ))}

      {/* place order button */}

      <Button
        variant="contained"
        color="secondary"
        onClick={() => placeOrder()}
      >
        Place Order
      </Button>
    </div>
  );
};

export function getStaticProps() {
  return {
    props: {
      menuItems: menuItems,
    },
  };
}

export default Menu;
