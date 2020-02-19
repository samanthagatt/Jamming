import React from 'react';
import Column from '../Column/Column';
import SongContainer from '../../containers/SongContainer';
import PropTypes from 'prop-types';

function Results(props) {
    return (
        <Column title="Results">
            { props.results.length !== 0 &&
                <ul>
                    { props.results.map(song => {
                        return <li key={song.id}><SongContainer song={song} isAdded={false} onPlaylistSongsChange={props.onPlaylistSongsChange} /></li>
                    })}
                </ul>
            }
         </Column>
    );
}

Results.propTypes = {
    results: PropTypes.array.isRequired
}

export default Results;