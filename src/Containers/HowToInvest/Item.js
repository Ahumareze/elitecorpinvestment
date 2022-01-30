import React from 'react';

function Item({text}) {
    return (
        <div className='Comp_Item' >
            <div style={{width: '90%'}}>{text}</div>
        </div>
    );
}

export default Item;