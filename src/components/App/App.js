import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchContainer from '../../containers/SearchContainer';
import ResultsAndPlaylist from '../ResultsAndPlaylist/ResultsAndPlaylist';

function App(props) {
    return (
        <div id="App">
            <Header />
            <main>
                <SearchContainer searchTerm={props.searchTerm}
                                onSearchTermChange={props.onSearchTermChange}
                                onSearch={props.onSearch} />
                <p id="note">* Unfortunately you can't grant this app access through Spotify on Safari, but if you're already logged in and allow access on another browser it will work :)</p>
                <ResultsAndPlaylist searchResults={props.searchResults}
                                    playlistTitle={props.playlistTitle}
                                    addedSongs={props.addedSongs}
                                    onPlaylistTitleChange={props.onPlaylistTitleChange}
                                    onPlaylistSongsChange={props.onPlaylistSongsChange}
                                    onSuccessfulCreation={props.onSuccessfulCreation} />
            </main>
        </div>
    );
 }
    
export default App;
