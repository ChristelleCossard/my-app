import React, {useState} from 'react';

const MyButton = () => {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count +1);
      };

    return (
        <>

        <label for="text-input">Email</label>
        <input type="text" id="text-input" />
        <p>compteur: {count}</p>
      <button type="button" onClick={handleClick}>Click me !</button>
      </>
    );
  };

  export default MyButton;