import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route ,useHistory  } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import PsikologList from "../PsikologList";
import Profil from "../profil";
import Psikolog from "../Psikolog";
import { Header, Footer } from "../../components";

const MainApp = () => {

    let history = useHistory()
    useEffect(() => {
        if(localStorage.getItem('token') == null){
            history.push("/login")
        }
    })

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
                    <Route path="/psikolog/:id" component={Psikolog} />
                    <Route path="/profil">
                        <Profil id={localStorage.getItem("id")} />
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
