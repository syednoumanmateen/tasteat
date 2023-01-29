import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
reportWebVitals();
