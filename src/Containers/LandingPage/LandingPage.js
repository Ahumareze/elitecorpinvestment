import React from 'react';
import './LandingPage.css';
import {connect} from 'react-redux';
import * as actionTypes from '../../Redux/Actions/ActionTypes';

import LandingPageBox from '../../Components/LandingPageBox/LandingPageBox';
import Header from '../../Components/Header/Header';
import Utility from '../../Components/Utilities/Utility';
import LineChart from '../../Components/Utilities/LineChart';
import Packages from '../../Components/Utilities/Packages';
import Packages2 from '../../Components/Utilities/Packages2';

//////// images import  ////////////
import LandingPageImage from '../../Assets/001.png';
import coin from '../../Assets/coin.png';
import manager from '../../Assets/manager.png';

///// utilty icons /////////
import icon1 from '../../Assets/icons/01.png';
import icon2 from '../../Assets/icons/02.png';
import icon3 from '../../Assets/icons/03.png';
import icon4 from '../../Assets/icons/04.png';
import icon5 from '../../Assets/icons/05.png';
import icon6 from '../../Assets/icons/06.png';


/////// crypro icons  //////////////////////
import crypto1 from '../../Assets/crypto/bitcoin.png';
import crypto2 from '../../Assets/crypto/ethereum.png';
import crypto3 from '../../Assets/crypto/tether.png';
import crypto4 from '../../Assets/crypto/laughing.png';
import crypto5 from '../../Assets/crypto/binance.png';
import crypto6 from '../../Assets/crypto/shiba-inu.png';
import Brains from '../../Components/Utilities/Brains';

/////// Team photos ////////////
import pic1 from '../../Assets/Team/01.png';
import pic2 from '../../Assets/Team/02.png'
import pic3 from '../../Assets/Team/03.png'
import pic4 from '../../Assets/Team/04.png'
import Clients from '../../Components/Utilities/Clients';
import TradingWidget from '../../Components/TradingWidget/TradingWidget';

//////// CONTACT INFO //////////////
import chatIcon from '../../Assets/chat.png';
import pin from '../../Assets/pin.png';
import phone from '../../Assets/phone-call.png';
import email from '../../Assets/email.png';

import InfoBoxes from '../../Components/Utilities/InfoBoxes';
import InputBox from '../../Components/Utilities/InputBox';
import TextAreaInput from '../../Components/Utilities/TextAreaInput';
import SliderWidget from '../../Components/TradingWidget/SliderWidget';
import Converter from '../../Components/Converter/Converter';
import AwesomeFacts from './AwesomeFacts.js';

const width = window.innerWidth

function LandingPage(props) {

    const invest = () => {
        props.history.push('/signin')
    }

    return (
        <div className='LandingPage'>
            {/* <Header login={() => props.history.push('/Signin')} /> */}
            <LandingPageBox img={LandingPageImage} />
            <SliderWidget />
            <section style={{marginTop: 30, width: '90%', marginLeft: '5%'}}>
                <div style={{display: 'grid', justifyContent: 'center', textAlign: 'center'}}>
                    <h2>INVEST IN CRYPTOCURRENCY AND <span style={{color: 'yellow'}}>EARN BIG</span> </h2>
                </div>
                <div style={{display: 'grid', justifyContent: 'center', marginBottom: 10}}>
                    <div className='about_line' />
                </div>
                <div style={{display: 'grid', justifyContent: 'center', marginBottom: 30}}>
                    <p style={{fontWeight: 600, textAlign: 'justify'}}>Bitcoin is a very exciting development; it might lead to a world currency. I think over th next decade it will grow to become one of the most important ways to pay for things and transfer assets.</p>
                    <p style={{fontWeight: 'bold', textAlign: 'justify'}}>- Kim Dotcom, CEO Megaupload</p>
                </div>
            </section>
            <section className='Aboutus_div' style={{paddingTop: 30}}>
                <div className='aboutus_header'>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <h2>ABOUT <span style={{color: 'yellow'}}>US</span> </h2>
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <div className='about_line' />
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <p style={{fontWeight: 600, textAlign: 'justify'}}>We use our master strategy and automated trading software which enables us earn in every entry made not withstanding the market being bullish or bearish.</p>
                    </div>
                </div>
                <section style={width > 900 ? {display: 'flex'} : null }>
                    <div className='aboutus_about' style={width > 900 ? {width: '50%', marginRight: 30} : null }>
                        <h3 style={{textAlign: 'center'}}>We Are Strategic And Awesome</h3>
                        <p>Elitecorp investment is an automated online investment platform that is a top secured and profitable option for you. Part of Elitecorpinvestment - the team of professional traders focusing mainly on Bitcoin and other cryptocurrencies trading over multiple Exchanges and markets. Headquartered in Massachusetts, Elitecorp investment is already becoming the Panam's fastest-growing FinTech company. Our name is synonymous with productive and profitable trading solutions where our investors need little to no trading experience at all. With Elitecorpinvestment, investors choose one of our three simple investment designs, make a deposit and sit back while our experts take the control.</p>
                        <div className='Read_More_button' onClick={() => props.history.push('/aboutus')}>
                            <p>Read More</p>
                        </div>
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <img alt='' src={coin} className='two_coins' />
                    </div>
                </section>
            </section>
            <div style={{height: 7, width: '100%', backgroundColor: 'yellow'}} />
            <section>
                <div className='why_elite_Header'style={{paddingTop: 20}}>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <h2>WHY CHOOSE ELITE <span style={{color:'yellow'}}>CORP</span></h2>
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <div className='about_line' />
                    </div>
                </div>
                <div className='Utitlty_container'>
                <Utility icon={icon1} title='Fund withdrawal'>Elitecorp investment are able to withdraw funds and paid instantly.</Utility>
                    <Utility icon={icon2} title='Overview'>We are a legal company registred in the United States of America, providing it's services to all country.</Utility>
                    <Utility icon={icon3} title='Security'>We are using one of the most sophisticated, encrypted and trusted protection against every possible aspect.</Utility>
                    <Utility icon={icon4} title='Our Team'>Our professional and dedicated 24/7 support team will be accessible anytime any assistance is required.</Utility>
                    <Utility icon={icon5} title='Guarantee'>We provide adequate insurance policy to our premium members.</Utility>
                    <Utility icon={icon6} title='Diversification'>Our portfolio is diversified and taken care of by the most skilled crypto analysts and traders using automated trading bot and best strategies.</Utility>
                </div>
            </section>
            
            <section>
                <div className='why_elite_Header'>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <h2>HOW IT WOR<span style={{color:'yellow'}}>KS</span></h2>
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <div className='about_line' />
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <p style={{fontWeight: 600}}>Explore for basic steps to start earning</p>
                    </div>
                </div>
                <div className='Step_container' style={width > 900 ? {display: 'flex'} : null }>
                    <Packages num={1} title='SIGN UP' invest={invest} >Register a free account and start your first step to passive daily income.</Packages>
                    <Packages num={2} title='INVEST' invest={invest} >Invest your preferred amount and choose your investment plan to get a stable income.</Packages>
                    <Packages num={3} title='START EARNING' invest={invest} >Watch your balance grow daily on your dashboard without doing any work.</Packages>
                    <Packages num={4} title='WITHDRAW PROFITS' invest={invest} >Withdraw your earnings whenever you want with just a click.</Packages>
                </div>
            </section>
            <section>
                <div className='why_elite_Header'>
                    <div style={{display: 'grid', justifyContent: 'center', marginTop: 30}}>
                        <h2>OUR SERVI<span style={{color:'yellow'}}>CE</span></h2>
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <div className='about_line' />
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center', width: '80%', marginLeft: '10%', textAlign: 'center'}}>
                        <p style={{fontWeight: 600, color: 'rgb(59, 59, 59)', textAlign:'justify'}}>Using our master class strategy with our algorithm and automated trading bots and softwares we give our clients the best satisfaction by giving back to them 5times their investments after making profitable entries in the crypto market. Investing with Elitecorp gives you no reason to loss whether the market is Bearish or Bullish. Invest with us now and start earning daily from the comfort of your home.</p>
                    </div>
                </div>
                <div className='Utitlty_container'>
                    <Utility icon={crypto1} title='Bitcoin (BTC)'>Bitcoin is a decentralized digital currency, without a central bank or single administrator that can be sent from user to user on the peer to peer Bitcoin network without the need for intermediaries.</Utility>
                    <Utility icon={crypto2} title='Ethereum (ERC20)'>Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform.</Utility>
                    <Utility icon={crypto3} title='Usdt (TRC20)'>Tether (often called by its symbol USDT) is a cryptocurrency with tokens issued by Tether limited. Tether is called stable coin because it was originally designed to always be worth US$1.00, maintaining $1.00 in reserves for each Tether used.</Utility>
                    <Utility icon={crypto4} title='Dogecoin (DOGE)'>Doge is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a "joke", making fun of the wild speculation in cryptocurrencies at the time</Utility>
                    <Utility icon={crypto5} title='Bnb (SMART CHAIN)'>Binance coin (BEP20) is a cryptocurrency that can be used to trade and pay fees on the Binance cryptocurrency exchange. The Binance exchange is the largest cryptocurrency exchange in the world as of January 2018, facilitating more than 1.4 million transactions per second. BNB can also be exchanged or traded for other cryptocurrencies such as BTC, ETH, USDT etc.</Utility>
                    <Utility icon={crypto6} title='Shiba Inu (SHIB)'>Decentralized cryptocurrency created in August 2020 by Ryoshi. This token is popularly known as "the Doge killer" and its holders bears the name "Shiba Army".</Utility>
                </div>
            </section>
            <section className='Chart_section' style={width > 900 ? {display: 'flex'} : null }>
                <div className='ch_1' style={width > 900 ? {width: '50%'} : null }>
                    <LineChart title='Bitcoin (BTC)' value={95} />
                    <LineChart title='ETHEREUM (ERC20)' value={80}  />
                    <LineChart title='USDT (TRC20)' value={85}  />
                    <LineChart title='BNB (BEP20)' value={60}  />
                    <LineChart title='Others' value={70}  />
                </div>
                <div className='ch_2' style={width > 900 ? {width: '50%'} : null }>
                    <img src={manager} alt='' />
                </div>
            </section>
            <section>
                <div className='why_elite_Header'>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <h2>INVESTMENT PACKAG<span style={{color:'yellow'}}>ES</span></h2>
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <div className='about_line' />
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center', width: '80%', marginLeft: '10%', textAlign: 'center'}}>
                        <p style={{fontWeight: 600, color: 'rgb(59, 59, 59)'}}>Below are the available investment plans we have for our amiable clients to partake in</p>
                    </div>
                </div>
                <div className='investment_packages_container'  style={width > 900 ? {display: 'flex'} : null }>
                    <Packages2  num={'200'} title='BASIC' percent={20} min={'200'} max={'$999'} invest={invest} />
                    <Packages2  num={'1,000'} title='ADVANCED' percent={25} min={'1,000'} max={'$9,999'} invest={invest} />
                    <Packages2  num={'10,000'} title='PRO' percent={30} min={'10,000'} max={'$49,999'} invest={invest} />
                    <Packages2  num={'50,000'} title='ULTRA' percent={35} min={'50,000'} max={'Unlimited'} invest={invest} />
                </div>
            </section>
            <section>
                <Converter />
            </section>
            <section>
                <div className='Team_container'>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <h2>OUR TE<span style={{color:'yellow'}}>AM</span></h2>
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <div className='about_line' />
                    </div>
                </div>
                <div className='brain_container'>
                    <Brains pic={pic1} name='PAUL HESLOP' job='CEO and Founder' />
                    <Brains pic={pic2} name='FARNOOSH TORABI' job='General Manager' />
                    <Brains pic={pic3} name='RODNEY HARRIS' job='Administrative Assistant' />
                    <Brains pic={pic4} name='ROSARIO RENDEROS' job='Consultant' />
                </div>
            </section>
            <section style={width > 600 ? {width: 600, marginLeft: 'auto', marginRight: 'auto', marginBottom: 50} : {marginBottom: 50}}>
                <div style={{display: 'grid', justifyContent: 'center', marginTop: 40}}>
                    <h2>CLIEN<span style={{color:'yellow'}}>TS</span></h2>
                </div>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <div className='about_line' />
                </div>
                <Clients />
            </section>
            <AwesomeFacts />
            <section>
                <div style={{display: 'grid', justifyContent: 'center', marginTop: 30}}>
                    <h2>CRYPRO CURRENCY CHA<span style={{color:'yellow'}}>RT</span></h2>
                </div>
                <TradingWidget />
            </section>
            <section>
                <div style={{display: 'grid', justifyContent: 'center', paddingTop: 50}}>
                    <h2>CONTACT <span style={{color:'yellow'}}>US</span></h2>
                </div>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <div className='about_line' />
                </div>
                <div style={{display: 'grid', justifyContent: 'center', width: '80%', marginLeft: '10%', textAlign: 'center'}}>
                    <p style={{fontWeight: 600, color: 'rgb(59, 59, 59)', marginBottom: 30}}>You can contact us using the contact info below</p>
                </div>
                <div className='Contact_main_container' style={width > 700 ? {display: 'flex'} : null}>
                    <div className='Contact_info' style={width > 700 ? {width: '50%'} : null}>
                        <InfoBoxes icon={pin} title='Address' content='No 69 Piedmont St, Worcester, MA 01610, USA' />
                        <InfoBoxes icon={email} title='Mail Us' content='support@elitecorpinvestment.org' />
                        <InfoBoxes icon={phone} title='Phone' content='+16097952607' />
                        <InfoBoxes icon={chatIcon} title='Website' content='www.elitecorpinvestment.org' />
                    </div>
                    <div className='sendMessage_container' style={width > 700 ? {width: '50%'} : null}>
                        <InputBox color='yellow' name='Email Address' />
                        <InputBox color='yellow' name='Subject' />
                        <TextAreaInput color='yellow' />
                        <button className='sendMessage_button'>Submit</button>
                    </div>
                </div>
            </section>
            <div className='Footer'>
                <p>Copyright © 2021 Elite Corp Investment</p>
            </div>
            <Header login={() => props.history.push('/signin')} faq={() => props.history.push('/FAQs')} aboutus={() => props.history.push('/aboutus')} terms={() => props.history.push('/terms')} home={() => props.history.push('/')} />
        </div>
    );
}

export default LandingPage;