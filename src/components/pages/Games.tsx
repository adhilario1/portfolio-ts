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
        
        </div>
        </>
        
    )
};

export default Games;