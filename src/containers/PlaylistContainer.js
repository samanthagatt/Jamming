import React from 'react';
import Playlist from '../components/Playlist/Playlist';
import Spotify from '../utils/Spotify';

class PlaylistContainer extends React.Component {
    handlePlaylistTitleChange(e) {
        this.props.onPlaylistTitleChange(e.target.value);
    }
    handleAddPlaylist() {
        Spotify.addPlaylist(this.props.playlistTitle, this.props.addedSongs.map(song => song.uri)).then(success => {
            if (success) {
                this.props.onSuccessfulCreation();
            }
        });
    }
    render() {
        return (
            <Playlist playlistTitle={this.props.playlistTitle} addedSongs={this.props.addedSongs} onPlaylistTitleChange={this.handlePlaylistTitleChange.bind(this)} onPlaylistSongsChange={this.props.onPlaylistSongsChange} onAddPlaylist={this.handleAddPlaylist.bind(this)} />
        )
    }
}

export default PlaylistContainer;