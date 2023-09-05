import React, { useState } from 'react';
import './App.css';
import on from './images/light-bulb-on.png';
import off from './images/light-bulb-off.png';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
    if (toggle) {
      document.body.style.backgroundColor = '#000000'; // Background is black when turned off
    } else {
      document.body.style.backgroundColor = '#ffffff'; // Background is white when turned on
    }
  };

  return (
    <div className="container">
      <div className="bulb-container">
        <img src={toggle ? on : off} className="bulb" alt="" />
      </div>
      <button className="button" onClick={toggleButton}>
        {toggle ? 'Turn On' : 'Turn Off'}
      </button>
    </div>
  );
};

export default App;
