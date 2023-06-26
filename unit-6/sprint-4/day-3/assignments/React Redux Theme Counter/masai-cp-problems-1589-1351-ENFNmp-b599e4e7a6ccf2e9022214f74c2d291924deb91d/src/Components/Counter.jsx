import React from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";

const Counter = () => {
  return (
    // the following div classname should be chnaged accrding to the theme
    <div data-testid="counter">
      <h1>Counter</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
<CounterValue/>
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons/>
    </div>
  );
};

export default Counter;
