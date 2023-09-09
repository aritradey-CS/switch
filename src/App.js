import React, { useState } from 'react';
import './App.css';
import on from './images/Bulb_on.jpg';
import off from './images/Bulb_off.jpg';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="bulb-container">
        <img src={toggle ? on : off} className="bulb" alt="" />
      </div>
      <button className="button" onClick={toggleButton}>
        {toggle ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default App;
