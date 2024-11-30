/* global window */
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const root = ReactDOMClient.createRoot(window.document.getElementById('root'));
root.render(<App />);
