import React from "react";
import Header from '../Header';

interface Props {
    breakpoint?: number;
}

const Games = ({breakpoint}: Props) => {
    return (
        <>
        <Header breakpoint={breakpoint}/>
        <div className="content games">
            games
        </div>
        </>
        
    )
};

export default Games;