import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="menu">
      <Link to="/infinity-bets">InfinityScrollPage</Link>
      <Link to="/bets">Whole Data Page</Link>
    </div>
  );
}

export default HomePage;
