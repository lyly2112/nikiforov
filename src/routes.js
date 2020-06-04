import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/HomePage';
import About from './components/pages/AboutPage';
import Services from './components/pages/ServicesPage';
import ContactUs from './components/pages/ContactPage';
import ContactButton from './components/ContactButton';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/services" component={ Services }/>
        <Route path="/contact" component={ ContactUs }/>
        <Route path="/contact" component={ ContactButton } />
    </Switch>
)