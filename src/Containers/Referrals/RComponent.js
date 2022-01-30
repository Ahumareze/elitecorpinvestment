import React from 'react';
import './Referral.css';

const width = window.innerWidth;

function RComponent({username}) {
    const Username = username.split(' ');
    const newUsername = Username[0];

    return (
        <div className='RComponent'>
            <div className='SecondWallet'>
                <h3>Refer And Earn</h3>
                <div className='SecondWalletLine' />
            </div>
            <div className='RC_Boxes' style={width < 600 && {display: 'inline-block'} } >
                <div className='RC_Box1' style={width < 600 && {width: '100%'}} >
                    <div className='RC_Box2' >
                        <h1>0</h1>
                        <p>Referrals</p>
                    </div>
                </div>
                <div className='RC_Box1' style={width < 600 && {width: '100%', marginTop: 30}} >
                    <div className='RC_Box3'>
                        <p className='RC_p'>Your referall ID is:</p>
                        <p className='RC_ID'>{newUsername + 802}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RComponent;