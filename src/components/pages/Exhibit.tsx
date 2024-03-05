import React from 'react'
import { useParams } from 'react-router-dom';

import Header from '../Header';

interface Props {
    breakpoint?: number;
}

const Exhibit = ({breakpoint}: Props) => {
    const {exhibitID} = useParams()
    return (
        <>
        <Header breakpoint={breakpoint}/>
        <div className='content'>
            <p>{exhibitID}</p>
        </div>
        
        </>
    )
};

export default Exhibit;