import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Navbar.css";

function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(
            sessionStorage.getItem("isLoggedIn") === "true"
        );
    }, []);

    function handleLogout() {
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("user");

        window.location.href = "/";
    }

    return (

        <nav className="navbar">

            <div className="navbar-brand">
                <h2>SnapSmart</h2>
            </div>

            <div className="navbar-links">

                <Link to="/">Home</Link>

                <Link to="/gallery">Gallery</Link>

                <Link to="/packages">Packages</Link>

                <Link to="/about">About Us</Link>

            </div>

            <div className="navbar-actions">

                {!isLoggedIn ? (

                    <Link
                        to="/login"
                        className="login-btn"
                    >
                        Login
                    </Link>

                ) : (

                    <button
                        className="login-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                )}

                <Link
                    to="/packages"
                    className="book-btn"
                >
                    Book Now
                </Link>

            </div>

        </nav>

    );

}

export default Navbar;