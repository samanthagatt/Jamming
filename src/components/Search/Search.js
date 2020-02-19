import React from 'react';
import './Search.css';

function Search(props) {
    return (
        <div id="search">
            <input className="children" 
                    id="search-term-input"
                    type="text" 
                    placeholder="Enter a song, album, or artist" 
                    value={props.searchTerm} 
                    onChange={props.onSearchTermChange}
                    onClick={props.onInputClick} />
            <button id="submit" className="children" onClick={props.onSearch}>SEARCH</button>
        </div>
    );
}

export default Search;