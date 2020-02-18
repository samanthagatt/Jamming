import React from 'react';
import './Playlist.css';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

function Playlist(props) {
    return (
        <Column>
            <input type="text" placeholder="New Playlist" id="playlist-name" />
            { props.addedSongs !== undefined &&
                <ul>
                    { props.addedSongs.map(song => <li key={song}>{song}</li>) }
                </ul>
            }
         </Column>
    );
}

Playlist.propTypes = {
    addedSongs: PropTypes.array
}

export default Playlist;