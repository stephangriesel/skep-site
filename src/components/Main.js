import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Grid from './Grid';
import Office from './Office';
import Shop from './Shop';
import Contact from './Contact';

import ProjectOne from './projects/ProjectOne';

const Main = () => (
    <div className="main-section">
    <Switch>
        <Route exact path="/" component={Grid} />
        <Route path="/office" component={Office} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        {/* <<<< Project links >>>>> */}
        <Route path="/projectone" component={ProjectOne} />
    </Switch>
    </div>
)

export default Main;