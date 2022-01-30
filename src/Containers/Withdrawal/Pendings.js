import React from 'react';

import coin from '../../Assets/coin2.png';

function Pendings(props) {
    return (
        <>
            <div className='Pending_boxes'>
                <div className='PB_top'>
                    <p>{props.walletId}</p>
                </div>
                <div className='PB_bottom'>
                    <div className='PB_bottom_r'>
                        <img src={coin} alt='' />
                        <p>{props.coin}</p>
                    </div>
                    <div className='PB_bottom_l'>
                        <p><span>Amount:</span>  ${props.amount}</p>
                    </div>
                </div>
            </div>
            <p className='status_p'>status: pending</p>
        </>
    );
}

export default Pendings;