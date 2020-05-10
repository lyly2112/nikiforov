import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Services from './components/ServicesPage';
import ContactUs from './components/ContactPage';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/services" component={ Services }/>
        <Route path="/contact" component={ ContactUs }/>
    </Switch>
)