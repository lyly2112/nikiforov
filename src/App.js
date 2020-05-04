import React, { Component } from 'react';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
        <ServicesPage/>
        <AboutMePage/>
        <ContactPage/>
      </div>
    );
  }
}

export default App;
