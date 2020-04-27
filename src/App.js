import React, { Component } from 'react';
import Home from './Home';
import Services from './Services';
import AboutMe from './AboutMe';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Services/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
