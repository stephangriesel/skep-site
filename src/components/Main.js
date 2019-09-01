import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Grid from './Grid';
import Office from './Office';
import Shop from './Shop';
import Contact from './Contact';
import '../css/Main.css';

import ProjectOne from './projects/ProjectOne';
import ProjectTwo from './projects/ProjectTwo';
import ProjectThree from './projects/ProjectThree';
import ProjectFour from './projects/ProjectFour';
import ProjectFive from './projects/ProjectFive';
import ProjectSix from './projects/ProjectSix';
import ProjectSeven from './projects/ProjectSeven';
import ProjectEight from './projects/ProjectEight';
import ProjectNine from './projects/ProjectNine';
// import ProjectTen from './projects/ProjectEleven';
// import ProjectEleven from './projects/ProjectEleven';
import ProjectTwelve from './projects/ProjectTwelve';
import ProjectThirteen from './projects/ProjectThirteen';
import ProjectFourteen from './projects/ProjectFourteen';
import ProjectFifteen from './projects/ProjectFifteen';
import ProjectSixteen from './projects/ProjectSixteen';
import ProjectSeventeen from './projects/ProjectSeventeen';
import ProjectEighteen from './projects/ProjectEighteen';

const Main = () => (
    <div className="main-section">
        <Switch>
            <Route exact path="/" component={Grid} />
            <Route path="/office" component={Office} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contact} />

            {/* <<<< Project links >>>>> */}
            <Route path="/projectone" component={ProjectOne} />
            <Route path="/projecttwo" component={ProjectTwo} />
            <Route path="/projectthree" component={ProjectThree} />
            <Route path="/projectfour" component={ProjectFour} />
            <Route path="/projectfive" component={ProjectFive} />
            <Route path="/projectsix" component={ProjectSix} />
            <Route path="/projectseven" component={ProjectSeven} />
            <Route path="/projecteight" component={ProjectEight} />
            <Route path="/projectnine" component={ProjectNine} />
            {/* <Route path="/projectten" component={ProjectTen} />
            <Route path="/projecteleven" component={ProjectEleven} /> */}
            <Route path="/projecttwelve" component={ProjectTwelve} />
            <Route path="/projectthirteen" component={ProjectThirteen} />
            <Route path="/projectfourteen" component={ProjectFourteen} />
            <Route path="/projectfifteen" component={ProjectFifteen} />
            <Route path="/projectsixteen" component={ProjectSixteen} />
            <Route path="/projectseventeen" component={ProjectSeventeen} />
            <Route path="/projecteighteen" component={ProjectEighteen} />
        </Switch>
    </div>


)

export default Main;