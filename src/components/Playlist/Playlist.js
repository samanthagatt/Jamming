import React from 'react';
import './Playlist.css';
import Column from '../Column/Column';
import SongContainer from '../../containers/SongContainer';
import PropTypes from 'prop-types';

function Playlist(props) {
    const hasSongs = props.addedSongs.length !== 0;
    return (
        <Column id="playlist-column">
            <input type="text" id="playlist-name" placeholder="New Playlist" value={props.playlistTitle} onChange={props.onPlaylistTitleChange} />
            { hasSongs &&
                <ul id="playlist">
                    { props.addedSongs.map(song => {
                        return <li key={song.id}><SongContainer song={song} isAdded={true} onPlaylistSongsChange={props.onPlaylistSongsChange} /></li>
                    })}
                </ul>
            }
            <button id="save-to-spotify" onClick={props.onAddPlaylist}>SAVE TO SPOTIFY</button>
         </Column>
    );
}

Playlist.propTypes = {
    addedSongs: PropTypes.array.isRequired
}

export default Playlist;