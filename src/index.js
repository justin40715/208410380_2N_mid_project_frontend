import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_80 from './App_80';

import { CardProvider_80 } from './context/CardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CardProvider_80>
  <React.StrictMode>
    <App_80 />
  </React.StrictMode>
  </CardProvider_80>
);


