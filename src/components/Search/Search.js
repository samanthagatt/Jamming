import React from 'react';
import './Search.css';

function Search(props) {
    return (
        <div id="search">
            <input className="children" 
                    type="text" 
                    placeholder="Enter a song, album, or artist" 
                    value={props.searchTerm} 
                    onChange={props.onSearchTermChange} />
            <button id="submit" className="children">SEARCH</button>
        </div>
    );
}

export default Search;