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
        <iframe frameBorder="0" src="https://itch.io/embed-upload/9895434?color=333333"  width="640" height="724"><a href="https://billyshouse.itch.io/tetris-clone">Play Tetris Clone on itch.io</a></iframe>
        </div>
        </>
        
    )
};

export default Games;