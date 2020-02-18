import React from 'react';
import './Column.css';
import PropTypes from 'prop-types';

function Column(props) {
    const hasTitle = props.title !== undefined;
    const hasChildren = props.children !== false;
    return (
        <div className="column">
            { hasTitle && <h2 className="title">{props.title}</h2> }
            {  hasChildren &&
                <div className="children" style={ hasTitle ? { marginTop: "1rem" } : {} } >
                    { props.children }
                </div>
            }
        </div>
    );
}

Column.propTypes = {
    title: PropTypes.string
}

export default Column;