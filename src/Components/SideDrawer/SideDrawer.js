import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './SideDrawer.css';
import * as actions from '../../Redux/Actions/Index';

import logo from '../../Assets/logo.png';

import {MdHomeFilled} from 'react-icons/md';
import { FaParachuteBox, FaWallet, FaUsers } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";

function SideDrawer(props) {
    const [email, setEmail] = useState();
    const [fullname, setfullname] = useState();

    useEffect(() => {
        fetchEmail();
    },[]);

    const fetchEmail = () => {
        const data = localStorage.getItem('@localemail');
        const data2 = localStorage.getItem('@localUsername');
        setEmail(data);
        setfullname(data2);
    }

    const empty = () => {}
    const logout = () => {
        props.logout()
    }

    return (
        <div className='SideDrawer' onClick={props.closeDrawer}>
            <div className='SideDrawerMain' onClick={empty}>
                <div className='SD_logocontainer'>
                    <img src={logo} />
                </div>
                <div className='SideDrawerHeader'>
                    <h3 className='SD_username'>{fullname}</h3>
                    <h3 className='SD_email'>{email}</h3>
                </div>
                <div className='SideDrawer_main'>
                    <div className='mainItem_container' style={props.dashboard ? {backgroundColor: '#fff'} : null} onClick={() => props.navigate('portfolio')}>
                        <MdHomeFilled style={props.dashboard ? {color: '#000'} : null} className='sd_icon' color='#fff' size={20} />
                        <p style={props.dashboard ? {color: '#000'} : null}>Portfolio</p>
                    </div>
                    {/* <div className='mainItem_container' style={props.secondWallet ? {backgroundColor: '#fff'} : null}  onClick={() => props.navigate('secondWallet')}>
                        <FaWallet style={props.secondWallet ? {color: '#000'} : null} className='sd_icon' color='#fff' size={20} />
                        <p style={props.secondWallet ? {color: '#000'} : null}>Second Wallet</p>
                    </div> */}
                    <div className='mainItem_container' style={props.deposit ? {backgroundColor: '#fff'} : null}  onClick={() => props.navigate('deposit')}>
                        <AiOutlineBank style={props.deposit ? {color: '#000'} : null} className='sd_icon' color='#fff' size={20} />
                        <p style={props.deposit ? {color: '#000'} : null}>Deposit</p>
                    </div>
                    <div className='mainItem_container' style={props.withdraw ? {backgroundColor: '#fff'} : null}  onClick={() => props.navigate('withdraw')}>
                        <BsCashStack style={props.withdraw ? {color: '#000'} : null} className='sd_icon' color='#fff' size={20} />
                        <p style={props.withdraw ? {color: '#000'} : null}>Withdraw Funds</p>
                    </div>
                    <div className='mainItem_container' style={props.HowToInvest ? {backgroundColor: '#fff'} : null}  onClick={() => props.navigate('howToInvest')}>
                        <FaParachuteBox style={props.HowToInvest ? {color: '#000'} : null} className='sd_icon' color='#fff' size={20} />
                        <p style={props.HowToInvest ? {color: '#000'} : null}>How To Invest</p>
                    </div>
                    <div className='mainItem_container' style={props.wallets ? {backgroundColor: '#fff'} : null}  onClick={() => props.navigate('wallets')}>
                        <FaWallet style={props.wallets ? {color: '#000'} : null} className='sd_icon' color='#fff' size={20} />
                        <p style={props.wallets ? {color: '#000'} : null}>Company's Wallets</p>
                    </div>
                    <div className='mainItem_container' style={props.referrals ? {backgroundColor: '#fff'} : null}  onClick={() => props.navigate('referrals')}>
                        <FaUsers style={props.referrals ? {color: '#000'} : null} className='sd_icon' color='#fff' size={20} />
                        <p style={props.referrals ? {color: '#000'} : null}>Referrals</p>
                    </div>
                </div>
                <div className='logoutout_container'>
                    <div className='logout_box' onClick={logout}>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(SideDrawer);