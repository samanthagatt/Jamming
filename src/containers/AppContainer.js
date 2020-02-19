import React from 'react';
import App from '../components/App/App';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchResults: [],
            playlistTitle: '',
            addedSongs: []
        }
    }
    updateState(key, value) {
        const newState = {};
        newState[key] = value;
        if (value === undefined) {
            newState[key] = [];
        }
        this.setState(newState);
    }
    updateAddedSongs(isAdded, newSong) {
        let addedSongs = this.state.addedSongs;
        if (!isAdded) {
            addedSongs.some(song => song.id === newSong.id) ||
            addedSongs.push(newSong);
         } else {
            addedSongs = addedSongs.filter(song => song.id !== newSong.id);
         }
        this.updateState('addedSongs', addedSongs);
    }
    clearPlaylist() {
        this.updateState('playlistTitle', '');
        this.updateState('addedSongs', []);
    }
    render() {
        return <App searchTerm={this.state.searchTerm} 
                    searchResults={this.state.searchResults} 
                    playlistTitle={this.state.playlistTitle}
                    addedSongs={this.state.addedSongs}
                    onSearchTermChange={this.updateState.bind(this, "searchTerm")}
                    onPlaylistTitleChange={this.updateState.bind(this, "playlistTitle")}
                    onSearch={this.updateState.bind(this, "searchResults")}
                    onPlaylistSongsChange={this.updateAddedSongs.bind(this)}
                    onSuccessfulCreation={this.clearPlaylist.bind(this)} />;
    }
 }
    
export default AppContainer;