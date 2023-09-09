import React from 'react';

const LightBulb = ({ isOn }) => {
  return <div className={`light-bulb ${isOn ? 'on' : 'off'}`}></div>;
};

export default LightBulb;
