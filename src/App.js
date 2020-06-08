import React, { Component } from 'react';
import NavbarMenu from './components/NavbarMenu';
import Footer from './components/Footer';
import routes from './routes';
import Home from './components/pages/HomePage';
import About from './components/pages/AboutPage';
import Services from './components/pages/ServicesPage';
import ContactUs from './components/pages/ContactPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMenu/>
        <div className="mobile">
          <Home/>
          <Services/>
          <About/>
          <ContactUs/>
        </div>
        <div className="desktop">
          { routes }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;