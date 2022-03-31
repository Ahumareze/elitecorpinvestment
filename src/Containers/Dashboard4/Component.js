import React from 'react';
import '../Dashboard/Dashboard.css';

import TradingWidget from '../../Components/TradingWidget/TradingWidget';
import BalanceBox from '../../Components/Utilities/BalanceBox';
import DashboardHeader from '../../Components/Utilities/DashboardHeader';
import DepositBox from '../../Components/Utilities/DepositBox';
import SliderWidget from '../../Components/TradingWidget/SliderWidget';

import Countries from '../../Components/Elements/Countries';
import Impressions from '../../Components/Elements/Impressions'; 

const width = window.innerWidth;

function Component({user, openDrawer, navigate, postImage}) {
    return (
        <div >
            <DashboardHeader name={user ? user.fullname : ''} profilePic={user ? user.profilePic : null} openDrawer={openDrawer} navigate={navigate} postImage={postImage} />
            <div style={{paddingTop: 100}}></div>
            <SliderWidget />
            <div className='SecondWallet'>
                <h3>Dashboard</h3>
                <div className='SecondWalletLine' />
            </div>
            <section className='Dashsection' style={width > 900 ? {display: 'flex'} : null}>
                <BalanceBox tag='Account Balance' price={user ? user.balance4: 0} color='#00B67A' />
                <BalanceBox tag='Total Deposit' price={user ? user.deposited4 : 0} color='#FF420F' />
                <BalanceBox tag='Total Earned' price={user ? user.profit4 : 0} color='#7A00FF' />
                <BalanceBox tag='Total Withdrawn' price={user ? user.withdrawn4 : null} color='#00BBDD' />
            </section>
            <div style={{width: '90%', marginLeft: '5%', paddingBottom: 30}}>
                <Countries />
                <Impressions />
            </div>
            <section className='DB_tradingWidget'>
                <TradingWidget />
            </section>
        </div>
    );
}

export default Component;