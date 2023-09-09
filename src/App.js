import React, { useState } from 'react';
import './App.css';
import on from './images/on.png';
import off from './images/off.png';

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
