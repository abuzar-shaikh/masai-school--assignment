import { useState, useReducer } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "email": {
      return { ...state, email: action.payload };
    }
    case "password": {
      return { ...state, password: action.payload };
    }
    case "reset": {
      return initialState;
    }
  }
  return state;
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [State, dispatch] = useReducer(reducer, initialState);

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      ...State,
      email: State.email,
      password: State.password,
    });
    dispatch({ type: "reset" });
  };
  console.log(submittedData);
  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form
        className="form-wrapper"
        data-testid="form-wrapper"
        onSubmit={handleSubmit}
      >
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input
            type="email"
            data-testid="user-email"
            onChange={(e) =>
              dispatch({
                type: "email",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input
            type="password"
            data-testid="user-password"
            onChange={(e) =>
              dispatch({
                type: "password",
                payload: e.target.value,
              })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      {submittedData.email != "" && submittedData.password != "" ? (
        <div>
          <div data-testid="submitted-data-email">
            User Email:{submittedData.email}
          </div>
          <div data-testid="submitted-data-password">
            User Password:{submittedData.password}
          </div>
        </div>
      ) : (
        <div data-testid="no-details-container">No details found</div>
      )}
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
