import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import PsikologList from "../PsikologList";
import Profil from "../profil";
import Psikolog from "../Psikolog";
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
                    <Route path="/list">
                        <PsikologList />
                    </Route>
                    <Route path="/psikolog">
                        <Psikolog />
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
