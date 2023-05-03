import "./fiction.json";
import data1 from "./fiction.json";
import data2 from "./nonfiction.json";
import React, { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {
  const [state, setstate] = useState(true);
  const togglebt = () => {
    setstate(!state);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Mini Book Store</h1>

      <button
        data-testid="toggle-btn"
        onClick={togglebt}
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          padding: "10px",
          fontWeight: "bolder",
          margin: "auto",
        }}
      >
        {state ? "Show Non-Fiction Books" : "Show Fictional Books"}
      </button>

      <div data-testid="conditional-container">
        {
          /* Render either Fiction or NonFiction Based on the Condition */
          state ? (
            <Fiction data={data1} props={"Show Fiction Books"} />
          ) : (
            <NonFiction nondata={data2} props={"Show Non-Fiction Books"} />
          )
        }
      </div>
    </div>
  );
}

export default App;
