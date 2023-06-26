import React from "react";
import { useSelector } from "react-redux";
import { store } from "../Redux/store";
import { counterReducer } from "../Redux/counterReducer";

const CounterValue = () => {
  const counter = useSelector((store) => store.counterReducer.counter);
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
