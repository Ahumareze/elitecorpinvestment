import React from 'react';

function Properties({active}) {
    return (
        <div className='Properties_div'>
            <div className='properties_circle' style={active ? {backgroundColor: 'rgba(255, 0, 0, 0.74)'} : null} />
        </div>
    );
}

export default Properties;