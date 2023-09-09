import React from 'react';

const LightBulb = ({ isOn }) => {
  return (
    <div className="light-bulb">
      <img
        src={isOn ? '/images/bulb_on.jpg' : '/images/bulb_off.jpg'}
        alt={isOn ? 'Bulb On' : 'Bulb Off'}
      />
    </div>
  );
};

export default LightBulb;
