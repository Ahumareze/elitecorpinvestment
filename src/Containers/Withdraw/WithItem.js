import React from 'react';

function WithItem({coinname, amount, walletName, walletId, status, date, network}) {
    return (
        <div className='WithItem' >
            <p>Coin name: <span>{coinname}</span> </p>
            <p>Network: <span>{network}</span> </p>
            <p>Amount: <span>{amount}</span></p>
            <p>Wallet name: <span>{walletName}</span> </p>
            <p>Wallet:<span className='WallId'>{walletId}</span> </p>
            <p>Status: <span>{status}</span> </p>
            <p>Date: <span>{date}</span> </p>
        </div>
    );
}

export default WithItem;