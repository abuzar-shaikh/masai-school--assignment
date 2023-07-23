import axios from "axios";

const TodoInput = ({ Data, setData }) => {
  const handalAddData = () => {
    axios
      .post(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
        Data
      )
      .then((res) => console.log(res.data));
  };

  console.log(Data);
  return (
    <div>
      <h1>todoinput</h1>
      <form onSubmit={handalAddData}>
        <input
          type="text"
          data-testid=" todo-input"
          onChange={(e) =>
            setData({ ...Data, title: e.target.value, status: false })
          }
        />
        <input type="submit" data-testid="add-button" />
      </form>
    </div>
  );
};

export default TodoInput;
