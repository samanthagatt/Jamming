import React from 'react';
import './Column.css';

function Column(props) {
    return (
        <div id="column">
            { props.title !== undefined && <h2 id="title">{props.title}</h2> }
            <div id="children">
                { props.children }
            </div>
        </div>
    );
}

export default Column;