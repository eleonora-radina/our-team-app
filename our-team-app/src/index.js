import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store'
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import ScrollToTop from './vendor/ScrollToTop';;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </ Provider>
);

reportWebVitals();
