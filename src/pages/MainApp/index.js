import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import { Header, Footer } from "../../components";

const MainApp = () => {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/">
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
            <Footer />

        </div>
    )
}


export default MainApp;
