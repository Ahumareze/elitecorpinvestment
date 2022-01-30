import React from 'react';

function Item({label, setItem}) {
    return (
        <div className='Converter_DropDown_Item' onClick={() => setItem(label) }>
            <p>{label}</p>
        </div>
    );
}

export default Item;