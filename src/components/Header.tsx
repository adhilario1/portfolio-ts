import React from "react";
import useWindowDimensions from "./code/WindowDimensions";
import SideBar from "./frag/SideBar";
import NavLinks from "./frag/NavLinks";
import NavBar from "./frag/NavBar";

import './css/Header.css'
interface Props {
    breakpoint?: number
}

const Header = ({breakpoint}: Props) => {
    const {height, width } = useWindowDimensions();
    console.log(height);

    if (breakpoint && (height && width < breakpoint)) {
        return (
            <div className='header mobile'>
                <div className='mobile-container'>
                    <a className='title primary-label'><h1>Adam Hilario</h1></a>
                    <SideBar>
                        <NavLinks />
                    </SideBar>
                </div>
            </ div>
        )
    } else {
        return (
            
            <div className="header web">
                <div className='container'>
                    <div className='title primary-label'>
                        <a href='/'><h1>Adam Hilario</h1></a> 
                    </div>
                </div>
                <NavBar />
            </div>
            
        )
        
    }
}

export default Header;