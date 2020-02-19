import React from 'react';
import Column from '../Column/Column';
import Song from '../Song/Song';
import PropTypes from 'prop-types';

function Results(props) {
    return (
        <Column title="Results">
            { props.results.length !== 0 &&
                <ul>
                    { props.results.map(result => <li key={result.key}><Song song={result} isAdded={false} /></li>) }
                </ul>
            }
         </Column>
    );
}

Results.propTypes = {
    results: PropTypes.array.isRequired
}

export default Results;