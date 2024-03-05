import React from 'react';

import { Link } from 'react-router-dom'
import Header from '../Header';


import {Post} from '../../models/Post';
//style
import '../css/Home.css'
import Modal from '../frag/Modal';

const testPost: Post = {
    id: 1,
    title: "this is a test",
    type: "image", 
    
    url: "/assets/images/test-img-3.jpg",
    year: 2024,
    description: "this is a place holder",
    discipline: "web-dev"
}

const Home = () => {
    
    return (
        <>
            <Header />
            <div className='content'>
                <div className='home'>
                    <h1 className='secondary-labe'>Welcome!</h1>
                    <p className='text'>
                        
                        <br />
                        I built this website to act as my portfolio. Please click one of the links below to learn more about me, or play some games! Or if you&apos;d just like to make a statement, sign the guestbook (because it&apos;s 1997, for some reason.)
                        <br />
                        <br />
                        <div style={{display: 'inline'}}>If you&apos;d like to learn more about this website, <Link className="link-box" to="/gallery/web-dev"><div className='link-indicator'>[</div><div className='link-text'>click here.</div><div className='link-indicator'>]</div></Link></div>
                    </p>
                    <Modal post={testPost}/>

                </div>
            </div>
        </>
    )
}

export default Home;