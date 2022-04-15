import React, {useState} from 'react';

const Bonjour = () => {

     const [firstname, setFirstname] = React.useState('Christelle');
  const handleChange = (event) => {
    setFirstname(event.target.value);
  };

  return (
    <div>
      <h1>Bonjour {firstname}!</h1>
      <input type="text" value={firstname} onChange={handleChange} />
    </div>
  );
};

export default Bonjour;