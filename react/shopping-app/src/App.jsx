import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./CartContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <CartProvider>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </CartProvider>
    </Router>
  );
}

export default App;
