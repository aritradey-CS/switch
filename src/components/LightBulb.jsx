import React from 'react';

const LightBulb = ({ isOn }) => {
  return (
    <div className="light-bulb">
      <img
        src={isOn ? '/on.png' : '/off.png'}
        alt={isOn ? 'Bulb On' : 'Bulb Off'}
      />
    </div>
  );
};

export default LightBulb;
