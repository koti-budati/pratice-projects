import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navigation = () => {
  const [cart, _setCart] = useContext(CartContext);
  const [items, updateItems] = useState({ count: cart.length, price: 0 });
  useEffect(() => {
    updateItems(() => {
      let count = 0;
      let price = 0;
      cart.forEach((i) => {
        count += i.number;
        price += i.number * i.price;
      });
      return { count: count, price: price.toFixed(2) };
    });
  }, [cart]);
  return (
    <div>
      <Link to="/">
        <h2>Welcome to shopping</h2>
      </Link>
      <Link to="/cart">
        <h3>Cart:{items.count} </h3>
      </Link>
      <h3>Price: ${items.price} </h3>
    </div>
  );
};

export default Navigation;
