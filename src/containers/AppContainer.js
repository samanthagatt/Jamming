import React from 'react';
import App from '../components/App/App';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            searchTerm: '',
            searchResults: [],
            playlistTitle: '',
            addedSongs: []
        }
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.updatePlaylistTitle = this.updatePlaylistTitle.bind(this);
    }

    updateSearchTerm(term) {
        this.setState({searchTerm: term});
    }

    updatePlaylistTitle(title) {
        this.setState({playlistTitle: title})
    }

    render() {
        return <App isLoggedIn={this.state.isLoggedIn}
                    searchTerm={this.state.searchTerm} 
                    searchResults={this.state.searchResults} 
                    playlistTitle={this.state.playlistTitle}
                    addedSongs={this.state.addedSongs}
                    onSearchTermChange={this.updateSearchTerm}
                    onPlaylistTitleChange={this.updatePlaylistTitle} />;
    }
 }
    
export default AppContainer;