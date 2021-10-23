import ProductList from "./ProductList";
import { useContext } from "react";
import { ProductContext } from "../productContext";
import { CartContext } from "../CartContext";

const Products = () => {
  const [productArray, isloading] = useContext(ProductContext);
  const [cart, _setCart] = useContext(CartContext);

  const renderList = () => {
    return productArray.map((element) => {
      let number = 0;
      cart.forEach((item) => {
        if (item.id === element.id) {
          number = item.number;
        }
      });
      return (
        <ProductList
          key={element.id}
          element={{ ...element, number: number }}
        />
      );
    });
  };
  return <div>{isloading ? <div>loading ...</div> : renderList()}</div>;
};

export default Products;
