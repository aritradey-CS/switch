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
    <div className={`container ${toggle ? 'bg-black' : 'bg-white'}`}>
      <div className="bulb-container">
        <img src={toggle ? on : off} className="bulb" alt="" />
      </div>
      <button className="button" onClick={toggleButton}>
        {toggle ? 'Turn On' : 'Turn Off'}
      </button>
      {document.body.style.backgroundColor === 'white' && (
        <div className="notice-board">
          <img src="/images/noticeboard.png" alt="Notice Board" />
          <p>This is the notice board content.</p>
        </div>
      )}
    </div>
  );
};

export default App;
