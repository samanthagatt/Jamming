import React from 'react';
import './Search.css';

function Search() {
    return (
        <div id="search">
            <input type="text" placeholder="Enter a song, album, or artist" className="children"/>
            <button id="submit" className="children">SEARCH</button>
        </div>
    );
}

export default Search;