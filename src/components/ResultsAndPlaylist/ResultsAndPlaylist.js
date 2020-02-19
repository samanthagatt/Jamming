import React from 'react';
import './ResultsAndPlaylist.css';
import Results from '../Results/Results';
import PlaylistContainer from '../../containers/PlaylistContainer';

function ResultsAndPlaylist(props) {
    return (
        <div id="results-and-playlist">
            <Results results={props.searchResults} onPlaylistSongsChange={props.onPlaylistSongsChange} />
            <PlaylistContainer addedSongs={props.addedSongs} onPlaylistTitleChange={props.onPlaylistTitleChange} onPlaylistSongsChange={props.onPlaylistSongsChange} />
        </div>
    );
}

export default ResultsAndPlaylist;