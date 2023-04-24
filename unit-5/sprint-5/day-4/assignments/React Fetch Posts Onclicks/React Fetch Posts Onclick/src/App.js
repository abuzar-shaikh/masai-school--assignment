import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";
function App() {
  const [state, setState] = useState([]);
  let url = "https://jsonplaceholder.typicode.com";

  async function handaleGetData() {
    let res = await fetch(`${url}/posts`);
    let data = await res.json();
    // console.log(data);
    setState(data);
  }
  return (
    <div className="App" data-testid="app">
      <button onClick={handaleGetData} id="get-posts-btn">
        GET POSTS
      </button>
      <div id="post-container">
        {
          /*  map through the posts data and pass props to the Posts component */
          state.map((ele) => (
            <Post key={ele.id} ele={ele} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
