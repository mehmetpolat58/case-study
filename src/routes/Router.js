import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BetsPage from '../pages/BetsPage';

function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/bets" exact element={<BetsPage />} />
    </Routes>
  );
}

export default Router;
