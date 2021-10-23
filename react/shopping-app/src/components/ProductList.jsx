import styles from "../styles/ProductList.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";

const ProductList = ({ element }) => {
  // For increment or decrement item list
  let [currentItem, updateItem] = useState(element.number);
  const [_cart, setCart] = useContext(CartContext);

  // increment Function
  let increment = () => {
    updateItem(() => currentItem + 1);
    setCart({ ...element, number: currentItem + 1 });
  };

  //decrement function
  let decrement = () => {
    updateItem(() => currentItem - 1);
    setCart({
      id: element.id,
      number: currentItem - 1,
    });
  };

  return (
    <div className={styles.productList}>
      <img src={element.image} alt={element.description} />
      <div>
        <h3>
          {element.title.length > 50
            ? element.title.slice(0, 50) + "..."
            : element.title}
        </h3>
        <p>{element.description}</p>
      </div>
      <div className={styles.price}>
        <h4>${element.price}</h4>
        <div>
          {currentItem === 0 ? (
            <button onClick={increment} className={styles.add}>
              add
            </button>
          ) : (
            <span>
              <button onClick={decrement}>-</button> {currentItem}
              <button onClick={increment}> + </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
