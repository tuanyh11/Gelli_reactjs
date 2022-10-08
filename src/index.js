import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './Redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
