import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="menu">
      <Link to="/ordinary">All Data to See</Link>
      <Link to="/bets">All Data to See</Link>
    </div>
  );
}

export default HomePage;
