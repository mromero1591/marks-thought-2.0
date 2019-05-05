import React from 'react';
import {Switch, Route} from 'react-router-dom';

//cusotom imports
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
    </Switch>
);