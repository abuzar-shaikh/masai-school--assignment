import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

const CounterButtons = () => {
  const dispatch = useDispatch();

  const addvalue = (val) => {
    dispatch(handleAdd(val));
  };

  const removevalue = (val) => {
    dispatch(handleReduce(val));
  };
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={() => addvalue(1)}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={() => addvalue(1)}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
