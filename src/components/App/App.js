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
                <ResultsAndPlaylist searchResults={props.searchResults}
                                    playlistTitle={props.playlistTitle}
                                    addedSongs={props.addedSongs}
                                    onPlaylistTitleChange={props.onPlaylistTitleChange}
                                    onPlaylistSongsChange={props.onPlaylistSongsChange} />
            </main>
        </div>
    );
 }
    
export default App;
