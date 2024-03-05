import React from 'react';
import Header from '../Header';

interface Props {
    breakpoint?: number;
}

const Contact = ({breakpoint}: Props) => {
    return (
        <>
        <Header breakpoint={breakpoint}/>
        <div className='content'>
            
        </div>
        </>
    )
}

export default Contact;