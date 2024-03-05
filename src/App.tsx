import React from 'react';
/*
import { Routes, Route } from 'react-router-dom'


import About from './components/pages/About';

import NotFound from './components/pages/NotFound';
import Gallery from './components/pages/Gallery';
import Exhibit from './components/pages/Exhibit';
import Games from './components/pages/Games';
import Guestbook from './components/pages/GuestBook';
import Contact from './components/pages/Contact';
*/

import Footer from './components/Footer';
import Body from './components/Body';
import Home from './components/pages/Home';

import useWindowDimensions from './components/code/WindowDimensions';
import './components/css/App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Gallery from './components/pages/Gallery';
import Exhibit from './components/pages/Exhibit';
import Games from './components/pages/Games';
import About from './components/pages/About';
import Guestbook from './components/pages/GuestBook';
import Contact from './components/pages/Contact';

const breakpoint=685;
function App() {
  const {height, width} = useWindowDimensions();

  var device;
  if (height && width < breakpoint) {
    device = "handheld";
  } else {
    device = "desktop";
  }
  return (
    <div>
      <div className={`background ${device}`}/>
      <Routes>
        <Route 
          path='/'
          element={<Body><Home /></Body>}
        />
        <Route 
          path="/gallery"
          element={<Body><Gallery /></Body>}
        />                
        <Route          
          path="/gallery/:exhibitID"
          element={<Body><Exhibit /></ Body>} 
        />
        <Route          
          path="/games"
          element={<Body><Games /></Body>}
        />              
        <Route
          path='/about'
            element={<Body><About /></Body>}
        />
        <Route  
          path="/guestbook"
          element={<Body><Guestbook /></Body>}
        />
        <Route     
          path="/contact/email"
          element={<Body><Contact /></Body>}
        />
        <Route 
          path="*"
          element={<NotFound />}
        />
      </Routes>
      
      
      <Footer />
    </div>
  );
}

export default App;
