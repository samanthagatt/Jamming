import React from 'react';
import './Song.css';

function Song(props) {
    const song = props.song;
    return (
        <div className="song-li">
            <div className="song-info">
                <p className="song-title">{song.title}</p>
                <p className="artist-and-album">{song.artist} | {song.album}</p>
            </div>
            <button>+</button>
        </div>
    );
}

export default Song;