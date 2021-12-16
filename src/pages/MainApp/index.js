import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import PsikologResult from "../PsikologResult";
import Profil from "../profil";
import { Header, Footer } from "../../components";

const MainApp = () => {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/result">
                        <PsikologResult />
                    </Route>
                    <Route path="/profil">
                        <Profil />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <Footer />

        </div>
    )
}


export default MainApp;
