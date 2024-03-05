import React from "react";
import Header from '../Header';

interface Props {
    breakpoint?: number;
}

const Guestbook = ({breakpoint}: Props) => {
    return (
        <>
        <Header breakpoint={breakpoint}/>
        <div className="content guestbook">
            guestbook
        </div>
        </>
        
    )
};

export default Guestbook;