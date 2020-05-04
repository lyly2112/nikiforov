import React, { Component } from 'react';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

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

export default function App() {
  return (
    <Router>
    <div>
    <nav>
    <ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/ServicesPage">Services</Link>
    </li>
    <li>
    <Link to="AboutMePage">About Me</Link>
    </li>
    <li>
    <Link to="ContactPage">Contact</Link>
    </li>
    </ul>
    </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

    <Switch>
    <Route path="/ServicesPage">
    <ServicesPage />
    </Route>
    <Route path="/AboutMePage">
    <AboutMePage />
    </Route>
    <Route path="/ContactPage">
    <ContactPage />
    </Route>
    </Switch>
    </div>
    </Router>
  );
};