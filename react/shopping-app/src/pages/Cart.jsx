import Navigation from "../components/Navigation";
import { Fragment } from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import ProductList from "../components/ProductList";
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const renderCart = () => {
    return cart.map((item) => {
      return <ProductList element={item} />;
    });
  };
  return (
    <Fragment>
      <Navigation />
      {cart.length > 0 ? renderCart() : <h3>Cart is Empty</h3>}
    </Fragment>
  );
};

export default Cart;
