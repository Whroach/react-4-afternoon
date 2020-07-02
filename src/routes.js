import Home from './components/Home/Home';
import About from './components/About/About';
import Student from './components/Student/Student'
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ClassList from './components/ClassList/ClassList'

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about"/>
        <Route component={ClassList} path="/classlist/:class"/>
        <Route component={Student} path="/student/:id"/>

    </Switch>
    
);