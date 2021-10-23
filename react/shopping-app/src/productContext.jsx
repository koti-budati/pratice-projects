import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  let [productArray, setProductArray] = useState([]);
  let [isloading, setloading] = useState(false);
  const productsFetch = () => {
    setloading(true);
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        setProductArray(json);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
      });
  };
  useEffect(() => {
    productsFetch();
  }, []);

  return (
    <ProductContext.Provider value={[productArray, isloading]}>
      {props.children}
    </ProductContext.Provider>
  );
};
