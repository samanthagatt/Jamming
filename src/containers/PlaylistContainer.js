import React from 'react';
import Playlist from '../components/Playlist/Playlist';

class PlaylistContainer extends React.Component {
    handlePlaylistTitleChange(e) {
        this.props.onPlaylistTitleChange(e.target.value);
    }
    render() {
        return (
            <Playlist addedSongs={this.props.addedSongs} onPlaylistTitleChange={this.handlePlaylistTitleChange.bind(this)} onPlaylistSongsChange={this.props.onPlaylistSongsChange} />
        )
    }
}

export default PlaylistContainer;