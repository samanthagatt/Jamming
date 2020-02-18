import React from 'react';
import './ResultsAndPlaylist.css';
import Results from '../Results/Results';
import Playlist from '../Playlist/Playlist';

function ResultsAndPlaylist(props) {
    return (
        <div id="results-and-playlist">
            <Results results={[{key: "hello", title: "Title", album: "Album", artist: "Artist"}, {key: "hello2", title: "Title2", album: "Album2", artist: "Artist2"}]} />
            <Playlist />
        </div>
    );
}

export default ResultsAndPlaylist;