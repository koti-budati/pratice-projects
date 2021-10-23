import Navigation from "../components/Navigation";
import Products from "../components/Products";
import { Fragment } from "react";
import { ProductProvider } from "../productContext";

const Home = () => {
  return (
    <Fragment>
      <ProductProvider>
        <Navigation />
        <Products />
      </ProductProvider>
    </Fragment>
  );
};

export default Home;
