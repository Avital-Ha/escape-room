import React from 'react';
import image from '../assets/abandoned-morgue-psychiatric-hospital.jpg'; // Adjust the path as needed

import './Home.css';

import { Link } from 'react-router-dom'; // הוסף את הייבוא של Link

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${image})` }}>
        <h1 className='openning'>Try to escape that room</h1>
        <button className='start-btn'>
          <Link className='start-txt' to="/first">start</Link>
        </button>
    
    </div>
  );
}

export default Home;
