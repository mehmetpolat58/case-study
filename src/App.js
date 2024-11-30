import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import './assets/style.scss';
import AppContextProvider from './store';

function App() {
  return (
    <div className="wrap">
      <AppContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
