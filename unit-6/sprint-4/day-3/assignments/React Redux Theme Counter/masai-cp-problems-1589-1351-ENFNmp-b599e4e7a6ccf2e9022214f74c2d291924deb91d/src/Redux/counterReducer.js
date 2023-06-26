//Complete the reducer function logic inside the curly braces {}
// the counter initstate shouldbe 10

import { ADD, REDUCE } from "./actionTypes";

const initstate = { counter: 10 };

const counterReducer = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD:
      return { ...state, counter: state.counter + payload };

    case REDUCE:
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};

export { counterReducer };
