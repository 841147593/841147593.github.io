import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import MainPageFr from './components/MainPageFr';
import News from './components/News';
import AboutUs from './components/AboutUs';


import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={MainPage} />
        <Route path="/MainPagefr" component={MainPageFr} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/News' component={News} />
      </div>
    </BrowserRouter>
  );
}

export default App;
