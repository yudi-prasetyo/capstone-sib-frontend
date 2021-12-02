import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

function App(){
    return(
        <Router>
            <div className="App">
                <div className="content">
                    <Header />
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
                    <Footer />
                </div>
            </div>
        </Router>

    )
}
export default App;
