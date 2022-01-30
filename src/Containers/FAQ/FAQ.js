import React from 'react';
import './FAQ.css';

import Item from './Item';
import data from './FAQ_data';

import Header from '../../Components/Header/Header';

function FAQ(props) {
    return (
        <div className='FAQContainer'>
            <div className='Aligner'>
                <h1>FA<span>Qs</span></h1>
                <div className='LineBoxx'/>
            </div>
            {data.map((i) => <Item question={i.question} answer={i.answer} />)}
            <Header login={() => props.history.push('/signin')} faq={() => props.history.push('/FAQs')} aboutus={() => props.history.push('/aboutus')} terms={() => props.history.push('/terms')} home={() => props.history.push('/')} />
        </div>
    );
}

export default FAQ;