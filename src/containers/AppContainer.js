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
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.updatePlaylistTitle = this.updatePlaylistTitle.bind(this);
        this.updateSearchResults = this.updateSearchResults.bind(this);
        this.updatePlaylistSongs = this.updatePlaylistSongs.bind(this);
    }
    updateSearchTerm(term) {
        this.setState({searchTerm: term});
    }
    updatePlaylistTitle(title) {
        this.setState({playlistTitle: title})
    }
    updateSearchResults(songs) {
        this.setState({searchResults: songs});
    }
    updatePlaylistSongs(songs) {
        this.setState({addedSongs: songs});
    }
    render() {
        return <App searchTerm={this.state.searchTerm} 
                    searchResults={this.state.searchResults} 
                    playlistTitle={this.state.playlistTitle}
                    addedSongs={this.state.addedSongs}
                    onSearchTermChange={this.updateSearchTerm}
                    onPlaylistTitleChange={this.updatePlaylistTitle}
                    onSearch={this.updateSearchResults}
                    onPlaylistSongsChange={this.updatePlaylistSongs} />;
    }
 }
    
export default AppContainer;