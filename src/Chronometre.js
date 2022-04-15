import React, {useState} from 'react';

const Chronometre = () => {


        const [seconds, setSeconds] = React.useState(0);
        const [active, setActive] = React.useState(false);
          
        React.useEffect(() => {
          let interval = null;
          if (active) {
            interval = setInterval(() => {
              setSeconds(seconds => seconds + 1);
            }, 1000);
          }
          return () => clearInterval(interval);
        }, [seconds, active]);
          
        const handleStart = () => {
          setActive(true);
        };
        
        const handleStop = () => {
          setActive(false);
        };
        
        const handleClear = () => {
          setSeconds(0);
          setActive(false);
        };

  return (
    <>
    <div>Chronometre</div>
    <p>{seconds}s</p>
     <button type="button" onClick={handleStart}>Démarrer</button>
    <button type="button" onClick={handleStop}>Pause</button>
    <button type="button" onClick={handleClear}>Réinitialiser</button>
    </>
  );
};

export default Chronometre;