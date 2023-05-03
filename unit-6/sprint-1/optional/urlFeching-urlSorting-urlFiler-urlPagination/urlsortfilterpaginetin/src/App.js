import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Addproduct from "./components/AddProduct";
import Productsitems from "./components/ProductsItems";

function App() {
  const [toggle, settoggle] = useState(true);
  return (
    <div className="App">
      <button onClick={() => settoggle(!toggle)}>
        {toggle ? "Add Products" : "Show Products"}
      </button>
      { toggle? <Productsitems />: <Addproduct />}
     
    </div>
  );
}

export default App;
