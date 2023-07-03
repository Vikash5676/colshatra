import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Markets from './component/Markets';
import Indbox from './component/Indbox';
import BrandStore from './component/BrandStore';
import Listings from './component/Listings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<App />}>

        </Route>
        <Route path="/my-listing" element={<Listings />}></Route>
        <Route path="/markets" element={<Markets />}></Route>
        <Route path="/indbox" element={<Indbox />}></Route>
        <Route path="/brandStores" element={<BrandStore />}></Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
