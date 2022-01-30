import React from 'react';

function Line(props) {
    return (
        <div className='FA_line' onClick={props.onClick} >
            <p style={props.color && {color: props.color}}>{props.name}</p>
            {props.children}
        </div>
    );
}

export default Line;