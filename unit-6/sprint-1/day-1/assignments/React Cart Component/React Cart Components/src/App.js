import "./App.css";
import data from "./db.json";
import Product from "../src/components/Product";
function App() {
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {
          /*  map through the  data and pass props to the Product component */
          data.map((elem)=>{

            <Product elem={elem}/>
          })
        }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
      </h1>
    </div>
  );
}

export default App;
