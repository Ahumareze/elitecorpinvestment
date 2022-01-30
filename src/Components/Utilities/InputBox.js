import React from 'react';

function InputBox({color, name, change}) {
    return (
        <div className='InputBox' style={color && {borderColor: color} }>
            <input placeholder={name} onChange={(e) => change(e.target.value)} />
        </div>
    );
}

export default InputBox;