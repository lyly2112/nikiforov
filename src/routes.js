import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './PagesComponents/HomePage';
import About from './PagesComponents/AboutPage';
import Services from './PagesComponents/ServicesPage';
import ContactUs from './PagesComponents/ContactPage';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/services" component={ Services }/>
        <Route path="/contact" component={ ContactUs }/>
    </Switch>
)