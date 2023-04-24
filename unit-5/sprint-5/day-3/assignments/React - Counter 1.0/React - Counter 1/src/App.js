import "./App.css";
import Counters from "./components/Counter";
function App() {
  return (
    <div className="App">
      <div data-testid="counter"><Counters/></div>
    </div>
  );
}

export default App;
