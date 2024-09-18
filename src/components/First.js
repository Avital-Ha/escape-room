import React from 'react';
import image from '../assets/firstScene.jpg'; // Adjust the path as needed

import './First.css';

import { Link } from 'react-router-dom'; // הוסף את הייבוא של Link

function First() {
  return (
    <div className='first' style={{ backgroundImage: `url(${image})` }}>
       
    
    </div>
  );
}

export default First;
