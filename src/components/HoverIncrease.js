import { useState } from "react";
import withCounter from "./withCounter.js"

const HoverIncrease = (props) => {
    const [fontSize, setFontSize] = useState(10);
    const { counter, incrementCounter } = props;

    return (
      <div>
        {/*This time, instead of listening to clicks,*/}
        {/*Listen to hover events instead*/}
        <button onMouseOver={() => setFontSize((size) => size + 1)}>
          Increase on hover
        </button>
        <p style={{ fontSize }}>
          Value of 'name' in HoverIncrease: {props.name}
        </p>
        <button onClick={() => incrementCounter()}>Increment counter</button>
        <p> Value of 'counter' in HoverIncrease: {counter}</p>
      </div>
    );
  }
  export default withCounter(HoverIncrease, 10);