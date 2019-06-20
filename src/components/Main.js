import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Grid from './Grid';
import Office from './Office';
import Shop from './Shop';
import Contact from './Contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Grid} />
        <Route path="/office" component={Office} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;