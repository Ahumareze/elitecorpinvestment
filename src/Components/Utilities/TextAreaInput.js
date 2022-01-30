import React from 'react';

function TextAreaInput(props) {
    return (
        <div className='TextAreaInput' style={props.color && {borderColor: props.color} }>
            <textarea style={{height: 140, width: '100%', border: 0}} placeholder='Message' />
        </div>
    );
}

export default TextAreaInput;