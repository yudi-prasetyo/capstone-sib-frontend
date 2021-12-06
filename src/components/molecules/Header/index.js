import React from "react";

const Header = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info text-center px-4">
            <div className="container">
                <a className="navbar-brand" href="/">Solutivo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/contact">Fitur</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link bg-light text-dark px-3 mx-3 rounded" href="/login">login</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
