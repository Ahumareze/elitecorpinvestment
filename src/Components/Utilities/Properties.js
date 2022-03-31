import React from 'react';

function Properties({active}) {
    return (
        <div className='Properties_div'>
            <div className='properties_circle' style={active ? {backgroundColor: 'yellow'} : null} />
        </div>
    );
}

export default Properties;