import React, {useState} from 'react';

const Counter = () => {

    const [counter, setCounter] = React.useState(0);
    const handleMinus = () => setCounter(counter - 1);
    const handlePlus = () => setCounter(counter + 1);

  return (
      <>
    <div><h2>Counter</h2>
            <button type="button" onClick={handleMinus}>-</button>
            <span>{counter}</span>
            <button type="button" onClick={handlePlus}>+</button>

    </div>

    </>
  );
};

export default Counter;