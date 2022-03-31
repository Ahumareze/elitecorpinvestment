import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Referral.css';
import RUsers from './RUsers';

const width = window.innerWidth;

function RComponent({username}) {
    const Username = username.split(' ');
    const newUsername = Username[0];
    const num = newUsername.charCodeAt() * 543;
    const refCode = newUsername + num;

    const [referalls, setReferalls] = useState();
    const [refUsers, setRefUsers] = useState();

    useEffect(() => {
        axios.get('https://elite-corp-default-rtdb.firebaseio.com/referalls.json')
            .then(r => {
                const data = r.data;
                const arr = [];
                Object.keys(data).map(key => {
                    if(data[key].refCode === refCode ){
                        let obj = {...data[key]};
                        arr.push(obj)
                    }
                });
                setReferalls(arr.length);
                setRefUsers(arr);
            })
            .catch(e => {
                console.log(e.response)
            })
    }, [])

    return (
        <div className='RComponent'>
            <div className='SecondWallet'>
                <h3>Refer Us & Earn</h3>
                <div className='SecondWalletLine' />
            </div>
            <div className='RC_Boxes' >
                <div className='RC_Box1' >
                    <p className='IntroTitleRC'>Your total number of referrals is shown below</p>
                    <div className='RC_Box2' >
                        <h1>{referalls}</h1>
                        <p>Referrals</p>
                    </div>
                </div>
                <div className='RC_Box1' >
                    <p className='IntroTitleRC'>Invite your family and friends to Elitecorp Investment and earn $5 instantly and more percentage referral bonuses according to the plan made by your referee</p>
                    <p className='IntroDetailsRC'>Each member has a unique Elitecorp Investment referral code  to share with family and friends and receive $5 instantly and more percentage referral bonuses from your referee investment plan made. If any one signs up with your referral code, he or she will be added to your referral program. Your referral code can be used to invite as many users as possible.</p>
                    <p className='IntroDetailsRC2' >Copy the code below invite your friends.</p>
                    <div className='RC_Box3'>
                        <p className='RC_p'>Your referall ID is:</p>
                        <p className='RC_ID'>{refCode}</p>
                    </div>
                </div>
                {refUsers &&
                <div className='R_Box_Users'>
                    {refUsers && refUsers.map(i => <RUsers username={i.fullname} email={i.email} /> )}
                </div>
                }
            </div>
        </div>
    );
}

export default RComponent;