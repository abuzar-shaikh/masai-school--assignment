import { useState, useReducer } from "react";
import "./App.css";
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from "@chakra-ui/react";
import { type } from "@testing-library/user-event/dist/type";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return { ...state, name: action.payload };
    }
    case "gender": {
      return { ...state, gender: action.payload };
    }
    case "role": {
      return { ...state, role: action.payload };
    }
    case "maritalStatus": {
      return { ...state, maritalStatus: action.payload };
    }
    case "reset": {
      return initialState;
    }
  }
  return state;
};

function App() {
  // note : Remove below const and instead import them from chakra import the following components from

  // use Table Component from chakra ui to display the details
  const TableContainer = () => <div />;

  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [state, dispatch] = useReducer(reducer, initialState);

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);
  const HandalSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
    dispatch({ type: "reset" });
  };
  console.log(submittedData);
  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={HandalSubmit}>
          <FormControl>
            <FormLabel>Name </FormLabel>

            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
            />
            <FormLabel>Gender </FormLabel>
            <Select
              name="gender"
              data-testid="gender-select"
              value={state.gender}
              onChange={(e) =>
                dispatch({ type: "gender", payload: e.target.value })
              }
            >
              <option>Male</option>
              <option>Female</option>
              <option>Prefer Not to Say</option>
            </Select>
            <FormLabel>Role </FormLabel>
            <Select
              name="role"
              data-testid="role-select"
              value={state.role}
              onChange={(e) =>
                dispatch({ type: "role", payload: e.target.value })
              }
            >
              <option>FrontEnd Developer</option>
              <option>BackEnd Developer</option>
              <option>FullStack Developer</option>
            </Select>

            <Checkbox
              name="maritalStatus"
              checked={state.maritalStatus}
              onChange={(e) =>
                dispatch({ type: "maritalStatus", payload: e.target.checked })
              }
            >
              Married
            </Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
      {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
      {submittedData.length > 0 ? (
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>s.NO</Th>
              <Th>USER</Th>
              <Th>GENDER</Th>
              <Th>ROLE</Th>
              <Th>MARITAL STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {submittedData.map((elem, index) => {
              return (
                <UserRow
                  name={elem.name}
                  gender={elem.gender}
                  role={elem.role}
                  maritalStatus={elem.maritalStatus}
                  id={index + 1}
                />
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <Heading data-testid="no-user-container">no users found</Heading>
      )}
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
