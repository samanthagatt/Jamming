import React from 'react';
import './ResultsAndPlaylist.css';
import Results from '../Results/Results';
import PlaylistContainer from '../../containers/PlaylistContainer';

function ResultsAndPlaylist(props) {
    return (
        <div id="results-and-playlist">
            <Results results={props.searchResults} onPlaylistSongsChange={props.onPlaylistSongsChange} />
            <PlaylistContainer playlistTitle={props.playlistTitle} 
                                addedSongs={props.addedSongs} 
                                onPlaylistTitleChange={props.onPlaylistTitleChange} 
                                onPlaylistSongsChange={props.onPlaylistSongsChange}
                                onSuccessfulCreation={props.onSuccessfulCreation} />
        </div>
    );
}

export default ResultsAndPlaylist;