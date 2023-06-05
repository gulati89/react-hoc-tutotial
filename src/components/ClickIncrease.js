//file name: components/ClickIncrease.js
import { useState } from "react";
import withCounter from "./withCounter";

const ClickIncrease = (props) => {
  const [fontSize, setFontSize] = useState(10); //set initial value of Hook to 10.
  const { counter, incrementCounter } = props;

  return (
    <div>
      {/*When clicked, increment the value of fontSize*/}
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with click
      </button>
      {/*Set the font size of this text to the fontSize variable.*/}
      <p style={{ fontSize }}>Value of 'name' in ClickIncrease: {props.name}</p>
      
      <button onClick={() => incrementCounter()}>Increment counter</button>
      <p> Value of 'counter' in ClickIncrease: {counter}</p>
    </div>
  );
};
export default withCounter(ClickIncrease, 5);
