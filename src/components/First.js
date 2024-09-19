import React, { useState } from 'react';
import image from '../assets/firstScene.jpg'; // Adjust the path as needed
import TaskOne from './TaskOne'; // ייבוא של הקומפוננטה
import './First.css';

function First() {
  const [showTaskOne, setShowTaskOne] = useState(false);
  const [showButton, setShowButton] = useState(true); // מצב לבדיקת אם הכפתור מוצג

  const handleButtonClick = () => {
    setShowTaskOne(true); // משנה את המצב כך ש-TaskOne יוצג
    setShowButton(false); // משבית את הכפתור
  };

  return (
    <div className='first' style={{ backgroundImage: `url(${image})` }}>
      {showButton && (
        <button 
          className='slik' 
          onClick={handleButtonClick}
        >
        </button>
      )}
      
      {showTaskOne && <TaskOne />} 
    </div>
  );
}

export default First;
