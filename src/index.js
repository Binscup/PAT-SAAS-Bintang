import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/header/header';
import Hero from './component/hero/hero';
import Main from './component/profil/profil';
import More from './component/More/More';
import About from './component/about/about';
import GetInTouch from './component/GTI/GetInTouch';
import Footer from './component/footer/footer';
import Profil from './component/profil/profil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Profil />
    <More />
    <About />
    <GetInTouch />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
