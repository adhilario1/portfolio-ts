import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../Header';

//style
import '../css/Home.css'

interface Props {
    breakpoint?: number;
}

const Home = ({breakpoint}: Props) => {
    
    return (
        <>
            <Header breakpoint={breakpoint}/>
            <div className='content'>
                <div className='home'>
                    <h1 className='secondary-label'>Welcome!</h1>
                    <p className='text'>
                        
                        <br />
                        I built this website to act as my portfolio. Please click one of the links below to learn more about me, or play some games! Or if you&apos;d just like to make a statement, sign the guestbook (because it&apos;s 1997, for some reason.)
                        <br />
                        <br />
                        <div style={{display: 'inline'}}>If you&apos;d like to learn more about this website, <Link className="link-box" to="/projects/web-dev"><div className='link-indicator'>[</div><div className='link-text'>click here.</div><div className='link-indicator'>]</div></Link></div>
                    </p>
    

                </div>
            </div>
        </>
    )
}

export default Home;