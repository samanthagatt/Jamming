import React from 'react';
import Song from '../components/Song/Song';

class SongContainer extends React.Component {
    handleButtonClick() {
        this.props.onPlaylistSongsChange(this.props.isAdded, this.props.song)
    }
    render() {
        return <Song song={this.props.song} isAdded={this.props.isAdded} onPlaylistSongsChange={this.handleButtonClick.bind(this)} />
    }
}

export default SongContainer;