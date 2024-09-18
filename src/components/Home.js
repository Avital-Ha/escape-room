import React from 'react';
import { Link } from 'react-router-dom'; // הוסף את הייבוא של Link

function Home() {
  return (
    <div>
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
