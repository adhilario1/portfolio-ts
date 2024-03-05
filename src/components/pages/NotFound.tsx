import React from "react";
import {Link} from 'react-router-dom';
//import NavBar from "../fragments/NavBar";
import useWindowDimensions from "../code/WindowDimensions";

import './../css/404.css';

const NotFound = () => {
    
    const { height, width } = useWindowDimensions();
    const breakpoint = 685;

    var device;
    if (height && width < breakpoint) {
        device="mobile404";
    } else {
        device="web404";
    }
    
    return (
        <div className="main">
            <div className="bounding-box">
                <div className="container">
                    <div className={`content four-o-four ${device}`}>
                        <h2 className="primary-label">oh no!</h2>
                        <h3 className="secondary-label">
                            404 error : page not NotFound
                            <br></br>
                            <span className="inline-text"><div className="bracket">[</div><Link className="link-text" to='/'>turn back now.</Link>]</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default NotFound;