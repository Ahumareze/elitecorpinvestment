import React, { useState } from 'react';

import Header from '../../Components/Header/Header';

//////// CONTACT INFO //////////////
import chatIcon from '../../Assets/chat.png';
import pin from '../../Assets/pin.png';
import phone from '../../Assets/phone-call.png';
import email from '../../Assets/email.png';

import InfoBoxes from '../../Components/Utilities/InfoBoxes';

import CertImage from '../../Assets/certificate.jpg';

import './AboutUs.css';

const width = window.innerWidth

function AboutUs(props) {
    const [show, setShow] = useState(false)

    const CertificateDiv = (
        <div className='CertificateDiv' onClick={() => setShow(false)}>
            <img src={CertImage} alt='' onClick={() => console.log(false)} />
        </div>
    )

    return (
        <>
        <div className='AboutUsPage'>
            <section className='Aboutus_div' style={{paddingTop: 30}}>
                <div className='aboutus_header'>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <h2>ABOUT <span style={{color: 'yellow'}}>US</span> </h2>
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <div className='about_line' />
                    </div>
                    <div style={{display: 'grid', justifyContent: 'center'}}>
                        <p style={{fontWeight: 600, textAlign: 'justify'}}>We use our master strategy and automated trading software which enables us earn in every entry made not withstanding the market being bullish or bearish</p>
                    </div>
                </div>
                <section style={width > 900 ? {display: 'flex'} : null }>
                    <div className='aboutus_about' style={width > 900 ? {width: '50%', marginRight: 30} : null }>
                        <h3 style={{textAlign: 'center'}}>We Are Strategic And Awesome</h3>
                        <p>Elitecorp investment is an automated online investment platform that is a top secured and profitable option for you. Part of Elitecorpinvestment - the team of professional traders focusing mainly on Bitcoin and other cryptocurrencies trading over multiple Exchanges and markets. Headquartered in Massachusetts, Elitecorp investment is already becoming the Panam's fastest-growing FinTech company. Our name is synonymous with productive and profitable trading solutions where our investors need little to no trading experience at all. With Elitecorpinvestment, investors choose one of our four simple investment designs, make a deposit and sit back while our experts take the control.
                            It is a common knowledge that cryptocurrency market is the most risky and profitable market in trading but at Elite Corp with the help of our experienced traders and financial analyst, we provide maximum profit with minimal risk. We achieve this because our traders have traded at various markets in the past few years and they are using that experience in cryptocurrency before investing to help traders make every trade relevent profitable.
                        </p>
                        <p>Month after Month, our company shows excellent trading results. However, with additional financial capital and by using all the opportunities and the accumulated expertise, the company and it's shareholders can secure additional dividends. So, we have decided to expand operations and raise additional funds through online investments. For that, we have created the online platform Elite Corp. All funds raised through this platform will be used to increase capital turnover and to recieve additional profits, with a share of those profits paid to every investor according to their selected plan. </p>
                    </div>
                </section>
            </section>
            <section className='sc_'>
                <h3 className='EC_header'>Elite Corp Investment</h3>
                <p style={{textAlign: 'justify', fontWeight: 600}}>Our company was founded om 29th Febuary 2017, under companies Act 2006 of the United States of America. To view the certificate, click the button below.</p>
                <div className='View_cert' onClick={() => setShow(true)}>
                    <p>View certificate</p>
                </div>
                <div className='Contact_info CDFG' style={width > 700 ? {width: '50%'} : null}>
                    <InfoBoxes icon={pin} title='Address' content='No 69 Piedmont St, Worcester, MA 01610, USA' />
                    <InfoBoxes icon={email} title='Mail Us' content='support@elitecorpinvestment.org' />
                    <InfoBoxes icon={phone} title='Phone' content='+16097952607' />
                    <InfoBoxes icon={chatIcon} title='Website' content='www.elitecorpinvestment.org' />
                </div>
            </section>
            <div className='Footer'>
                <p>Copyright © 2021 Elite Corp Investment</p>
            </div>
            <Header login={() => props.history.push('/signin')} faq={() => props.history.push('/FAQs')} aboutus={() => props.history.push('/aboutus')} terms={() => props.history.push('/terms')} home={() => props.history.push('/')} />
        </div>
        {show && CertificateDiv}
        </>
    );
}

export default AboutUs;