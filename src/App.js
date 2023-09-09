import React, { useState } from 'react';
import './App.css';
import LightBulb from '../src/components/LightBulb';
import Button from '../src/components/Button';
import NoticeBoard from '../src/components/NoticeBoard';

function App() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`App ${isOn ? 'light-background' : 'dark-background'}`}>
      <LightBulb isOn={isOn} />
      <Button handleClick={handleClick} isOn={isOn} />
      <NoticeBoard isOn={isOn} />
    </div>
  );
}

export default App;
