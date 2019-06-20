import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Grid from './Grid';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Grid} />
    </Switch>
)

export default Main;