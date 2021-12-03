import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    Login,
    Register,
    Home,
    Contact,
    About
} from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    )
}

export  default Routes;
