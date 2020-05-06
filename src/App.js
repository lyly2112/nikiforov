import React, { Component } from 'react';
import NavbarMenu from './NavbarMenu';
// import HomePage from './HomePage';
// import ServicesPage from './ServicesPage';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';
import Footer from './Footer';
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