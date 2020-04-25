import React, { Component } from 'react';
import Home from './Home';
import Services from './Services';
import About_me from './About_me';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Services/>
        <About_me/>
      </div>
    );
  }
}

export default App;
