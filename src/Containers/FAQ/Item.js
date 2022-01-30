import React from 'react';
import './FAQ.css';

const width = window.innerWidth;

function Item({question, answer}) {
    return (
        <div className='FAQ_Item' style={width > 700 ? {width: '60%', marginLeft: '20%'} : null }>
            <p style={{fontSize: 'bold'}} className='FAQ_P1'>{question}</p>
            <p style={{textAlign: 'justify'}}>{answer}</p>
        </div>
    );
}

export default Item;