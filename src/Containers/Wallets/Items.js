import React from 'react';
import './Wallets.css';

const width = window.innerWidth;

function Items({title, subTitle, wallet}) {
    return (
        <div className='Wallets' style={width < 600 ? {width: '90%', marginLeft: '5%'} : null} >
            <div className='WA_container'>
                <h4 style={{width: '80%'}}>{title}<span>{subTitle} Wallet Address</span></h4>
                <div style={{width: '50%'}}>
                    <p>{wallet}</p>
                </div>  
            </div>
        </div>
    );
}

export default Items;