import React from 'react';

import NavBar from './NavBar';
import useWindowDimensions from '../code/WindowDimensions';
import Sidenav from './SideBar';
import NavLinks from './NavLinks';

import '../css/header.css';
const breakpoint = 685;

function Head(){
    const {height, width } = useWindowDimensions();
    console.log(height);

    if (height && width < breakpoint) {
        return (
            <div className='header mobile'>
                <div className='mobile-container'>
                    <a className='title primary-label'><h1>Adam Hilario</h1></a>
                    <Sidenav>
                        <NavLinks />
                    </Sidenav>
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


export default Head;