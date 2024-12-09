import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BetsPage from '../pages/BetsPage';
import InfinityPage from '../pages/InfinityPage';

function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/bets" exact element={<BetsPage />} />
      <Route path="/infinity-bets" exact element={<InfinityPage />} />
    </Routes>
  );
}

export default Router;
