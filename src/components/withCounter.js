import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent, increaseCount) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(10);

    //render OriginalComponent and pass on its props.
    return (
      <OriginalComponent
        name="Demo of HOC"
        counter={counter}
        incrementCounter={() => setCounter((size) => size + increaseCount)}
      />
    );
  };
  return NewComponent;
};
export default UpdatedComponent;
