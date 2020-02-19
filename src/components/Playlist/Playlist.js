import React from 'react';
import './Playlist.css';
import Column from '../Column/Column';
import Song from '../Song/Song';
import PropTypes from 'prop-types';

function Playlist(props) {
    const hasSongs = props.addedSongs !== undefined;
    return (
        <Column id="playlist-column">
            <input type="text" placeholder="New Playlist" id="playlist-name" />
            { hasSongs &&
                <ul id="playlist">
                    { props.addedSongs.map(song => <li key={song}><Song song={song} isAdded={true} /></li>) }
                </ul>
            }
            <button id="save-to-spotify" style={ !hasSongs ? {marginTop: "1.5rem"} : {} }>SAVE TO SPOTIFY</button>
         </Column>
    );
}

Playlist.propTypes = {
    addedSongs: PropTypes.array
}

export default Playlist;