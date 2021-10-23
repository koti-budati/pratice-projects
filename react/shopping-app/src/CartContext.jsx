import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const updateCart = (item) => {
    setCart(() => {
      let index = cart.findIndex((i) => i.id === item.id);
      if (index === -1) {
        return [...cart, item];
      } else {
        let cartCopy = cart;
        cartCopy[index].number = item.number;
        if (cartCopy[index].number <= 0) {
          cartCopy.splice(index, 1);
        }
        return [...cartCopy];
      }
    });
  };

  return (
    <CartContext.Provider value={[cart, updateCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
