import React, { Component } from 'react';
import NavbarMenu from './components/NavbarMenu';
import Footer from './components/Footer';
import routes from './routes';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMenu/>
        { routes }
        <Footer/>
      </div>
    );
  }
}

export default App;