import React from 'react';
import './Terms.css';

import Header from '../../Components/Header/Header';

import data from './Data';

import Item from '../FAQ/Item';

function Terms(props) {
    return (
        <div className='Terms_container'>
            <div className='Aligner'>
                <h2>TERMS & CONDI<span>TIONS</span></h2>
                <div className='LineBoxx' />
            </div>
            <div style={{paddingTop: 30}} />
            <p className='RULES_P'>Please read the following terms & conditions carefully before signing in.</p>
            <p className='RULES_P'>In using this website you are deemed to have read and agreed to the following terms and conditions:</p>
            <p className='RULES_P'>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. "The Company", “Ourselves”, “We” and "Us", refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing British Law. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
            {data.map(i => <Item question={i.label} answer={i.property} /> )}
            <Header login={() => props.history.push('/signin')} faq={() => props.history.push('/FAQs')} aboutus={() => props.history.push('/aboutus')} terms={() => props.history.push('/terms')} home={() => props.history.push('/')} />
        </div>
    );
}

export default Terms;