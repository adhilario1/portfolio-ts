import React, { useState } from "react";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './../css/SideBar.css'

const linktree = [
    {
        "label": "home",
        "url": "/"
    },
    {
        "label": "gallery",
        "url": "/gallery"
    },
    {
        "label": "games",
        "url": "/games"
    },
    {
        "label": "about",
        "url": "/about"
    },
    {
        "label": "guestbook",
        "url": "/guestbook"
    },
    {
        "label": "this site",
        "url": "/gallery/web-dev"
    },
    {
        "label": "contact",
        "url": "/contact/email"
    }
]

const SideBar = () => { 
    const [sideBar, setSideBar] = useState(false);

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    }
    console.log(sideBar);
    return (
        <>
        <div className="open-side">
            <a className="menu-bars"onClick={toggleSideBar} >
                <FaIcons.FaBars onClick={toggleSideBar} />
            </a>
        </div>
        <nav className={sideBar? 'sidebar-main active' : 'sidebar-main'}>
            <ul className="" onClick={toggleSideBar}>
                <li className="sidebar-toggle">
                    <Link to='#' className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
            {linktree.map((link) => (
                <li className="list-item">
                    <Link to={link.url}>{link.label}</Link>
                </li>
            ))}
            </ul>
        </nav>
        </>
    )
}

export default SideBar;

/*
<Link to={link.url}>{link.label}</Link>
*/
