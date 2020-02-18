import React from 'react';
import './ResultsAndPlaylist.css';
import Results from '../Results/Results';
import Playlist from '../Playlist/Playlist';

function ResultsAndPlaylist(props) {
    return (
        <div id="results-and-playlist">
            <Results results={["This", "That"]} />
            <Playlist />
        </div>
    );
}

export default ResultsAndPlaylist;