import React from 'react';
import './Search.css';

function Search() {
    return (
        <div id="search">
            <input type="text" placeholder="Enter a song, album, or artist" class="children"/>
            <button id="submit" class="children">SEARCH</button>
        </div>
    );
}

export default Search;