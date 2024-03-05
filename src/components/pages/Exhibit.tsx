import React from 'react'
import { useParams } from 'react-router-dom';

import Header from '../Header';

const Exhibit = () => {
    const {exhibitID} = useParams()
    return (
        <>
        <Header />
        <div className='content'>
            <p>{exhibitID}</p>
        </div>
        
        </>
    )
};

export default Exhibit;