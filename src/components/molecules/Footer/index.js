import React from "react";

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Beranda</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p className="text-center text-muted">&copy; Capstone Dicoding 2021</p>
            </footer>
        </div>
    )
}

export default Footer;
