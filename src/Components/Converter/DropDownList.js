import React, { useEffect } from 'react';
import './Converter.css';
import Item from './Item';

const width = window.innerWidth;


function DropDownList({data, setItem, close}) {
    return (
        <div className='Converter_Dropdown' onClick={close}>
            <div className='Conveter_Main_dropDown' style={{width: width - 40}}>
                {data.map(i => <Item label={i} setItem={setItem} />)}
            </div>
        </div>
    );
}

export default DropDownList;