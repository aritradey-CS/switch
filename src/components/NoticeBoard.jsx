import React from 'react';

const NoticeBoard = ({ isOn }) => {
  return (
    <div className={`notice-board ${isOn ? 'visible' : 'hidden'}`}>
      <p>Notice Board Content</p>
    </div>
  );
};

export default NoticeBoard;
