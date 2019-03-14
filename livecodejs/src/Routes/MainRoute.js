import React from 'react';
import { Route, Switch } from "react-router-dom"

import SignIn from "../SignIn"; 
import Profile from "../Components/Profile"; 
// import NotMatch from "../Pages/NotMatch"; 
import Home from "../Pages/Home"; 
import Romance from "../Pages/Romance"; 
import Action from "../Pages/Action"; 
import Fiction from "../Pages/Fiction"; 
import Comedy from "../Pages/Comedy"; 

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/romance" component={Romance} />
            <Route exact path="/action" component={Action} />
            <Route exact path="/fiction" component={Fiction} />
            <Route exact path="/comedy" component={Comedy} />
        </Switch>
    )
};

export default MainRoute;

{/* <Route component={NotMatch} /> */}
