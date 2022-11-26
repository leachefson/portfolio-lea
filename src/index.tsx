import ReactDOM from 'react-dom/client'
import "./styles/tailwind.css";
import App from "./App";
import Footer from './layout/Footer'
import Navbar from './layout/Navbar';
import * as serviceWorker from "./serviceWorker";

import React from 'react';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Footer/>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
