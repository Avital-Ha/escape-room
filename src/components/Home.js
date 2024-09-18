import React from 'react';
import image from '../assets/abandoned-morgue-psychiatric-hospital.jpg'; // Adjust the path as needed

import './Home.css';

import { Link } from 'react-router-dom'; // הוסף את הייבוא של Link

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${image})` }}>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link to="/first">First</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
