import React from 'react';

const Button = ({ handleClick, isOn }) => {
  return (
    <button className="switch-button" onClick={handleClick}>
      {isOn ? 'Turn Off' : 'Turn On'}
    </button>
  );
};

export default Button;
