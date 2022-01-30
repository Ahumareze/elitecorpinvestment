import React from 'react';
import Pendings from './Pendings';

import emptyIcon from '../../Assets/empty.svg';
const width = window.innerWidth;

function WithdrawSection(props) {

    const empty = (
        <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
            <img src={emptyIcon} alt='' style={width < 600 ? {width: '100%', marginTop: 50} : {width: 400, marginTop: 50}} />
            <div style={{textAlign: 'center', marginTop: 100}}>
                <p className='pending_amount'>You have no pending withdrawal</p>
            </div>
        </div>
    )

    const container = (
        <>
            <Pendings
                amount={props.withdrawals.amount}
                coin={props.withdrawals.coin}
                walletId={props.withdrawals.wallteId}
            />
            <div style={{textAlign: 'center', marginTop: 100}}>
                <p className='pending_amount'>You have one pending withdrawal</p>
            </div>
        </>
    )

    return (
        <div className='Withdraw_section' style={width > 600 ? {width: 550, marginLeft: 'auto', marginRight: 'auto'} : null}>
            {props.withdrawals === 'Empty' ? 
                empty
                :
                container
            }
            
        </div>
    );
}

export default WithdrawSection;