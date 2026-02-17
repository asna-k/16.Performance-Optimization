import React, { useMemo } from "react";

const SlowComponent = ({ count }) => {
  console.log("SlowComponent Rendered");

  const expensiveCalculation = (num) => {
    console.log("Expensive calculation running...");
    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += i; // Simulate a slow calculation
    }

    return result + num;
  };

  // useMemo prevents recalculation unless `count` changes
  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Slow Component</h2>
      <p>Calculated Value: {calculatedValue}</p>
    </div>
  );
};

export default SlowComponent;
