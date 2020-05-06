import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './HomePage';
import About from './AboutPage';
import Services from './ServicesPage';
import ContactUs from './ContactPage';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/services" component={ Services }/>
        <Route path="/contact" component={ ContactUs }/>
    </Switch>
)