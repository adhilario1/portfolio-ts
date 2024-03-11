//React Libraries
import React, { useState } from "react";

//Components
import Header from '../Header';
import Modal from "../frag/Modal";

//style
import './../css/Arcade.css';

//data
import games from './../../assets/data/games.json';

interface Props {
    breakpoint?: number;
}

const Games = ({breakpoint}: Props) => {
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState(games);

    const handleFilterChange = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        var safeSearchTypeValue: string = event.currentTarget.value;
        setFilter(safeSearchTypeValue);
        filterData(safeSearchTypeValue);
    };

    const filterData = (filter: string) => {
        const filteredData = games.filter((item) => 
            item.discipline.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    return (
        <>
        <Header breakpoint={breakpoint}/>
        <div className="content games">
            <div className="page-title">
                <h1 className="secondary-label">Games</h1>
                <p>A playable repository for some of the games I've made. It isn't all of them, just the ones that were light enough to play in a browser</p>
            </div>

            <div className="viewport-container">
                <ul>
                    {filteredData.map((item) => (
                        <>
                        <li key={item.id}>
                            <Modal className="Modal" game={item} breakpoint={breakpoint} />
                        </li>
                        </>
                    ))}
                </ul>
            </div>
            <iframe frameBorder="0" src="https://itch.io/embed/2573424?bg_color=111&amp;fg_color=faebd7&amp;link_color=ff8b00&amp;border_color=bebebe" width="552" height="167"><a href="https://billyshouse.itch.io/tetris-clone">Tetris Clone by billyshouse</a></iframe>
            <iframe frameBorder="0" src="https://itch.io/embed-upload/9913708?color=333333" width="640" height="724" allowFullScreen><a href="https://billyshouse.itch.io/tetris-clone">Play Tetris Clone on itch.io</a></iframe>
        </div>
        </>
        
    )
};

export default Games;