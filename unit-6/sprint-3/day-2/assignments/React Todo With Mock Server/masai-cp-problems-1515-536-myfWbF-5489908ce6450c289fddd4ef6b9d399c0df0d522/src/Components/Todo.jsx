import axios from "axios";
import TodoInput from "./TodoInput";
import react, { useState, useEffect } from "react";

const Todos = () => {
  const [todo, settodo] = useState([]);
  const [Data, setData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
      .then((res) => {
        settodo(res.data);
      });
  }, [Data]);
  return (
    <div>
      {/* add TodoInput component here */}
      {<TodoInput Data={Data} setData={setData} />}
      {/* map through the todos array and display the tasks */}
      {todo.map((elem, index) => {
        return (
          <div data-testid="todos-wrapper" key={index}>
            {elem.status ? (
              <h3>{elem.title}-true</h3>
            ) : (
              <h3>{elem.title}-false</h3>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
