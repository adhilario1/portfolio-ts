/* eslint-disable */
import React, {useState, useEffect} from "react";

import '../css/Navbar.css';
import NavLinks from "./NavLinks";


const NavBar = () => {
    /*
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickyBar);

        return () => {
            window.removeEventListener('scroll', stickyBar);
        };
    }, []);

    const stickyBar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
        }
    }
    */
    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="start">
                <div className="navbar-container">
                    <NavLinks />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;