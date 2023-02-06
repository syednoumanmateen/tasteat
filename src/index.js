import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Store from '../src/store/Store.js'
import { Provider } from 'react-redux';
// import { BrowserView, MobileView } from 'react-device-detect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={Store} >
    <HashRouter >
      {/* <BrowserRouter> */}
      {/* </BrowserRouter> */}
      {/* <BrowserView> */}
        <App />
      {/* </BrowserView> */}
      {/* <MobileView> */}
        {/* <App /> */}
      {/* </MobileView> */}
    </HashRouter >
  </Provider >
);
reportWebVitals();
