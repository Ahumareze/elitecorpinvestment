import React from 'react';
import { BiCalculator, BiGroup, BiUserPlus, BiUser } from 'react-icons/bi';
import { BsFillCalculatorFill } from 'react-icons/bs';

import growth from '../../Assets/growth.png';

function AwesomeFacts(props) {
    return (
        <div className='AwesomeFactsContainer'>
            <img src={growth} />
            <h3>Elite Corp Investment</h3>
            <h1>AWESOME FACTS</h1>
            <p>Here are some important facts about us</p>
            <div className='AwesomeFacts'>
                <div className='AwesomeNumbers'>
                    <p>$<span>6,905,328</span> </p><BiCalculator color='#000' size={30} style={{marginLeft: 15}} />
                </div>
                <p style={{marginTop: 10}}>PROFIT PAID</p>
            </div>
            <div className='AwesomeFacts'>
                <div className='AwesomeNumbers'>
                    <p><span>10,890</span> </p><BiGroup color='#000' size={30} style={{marginLeft: 15}} />
                </div>
                <p style={{marginTop: 10}}>HAPPY CLIENTS</p>
            </div>
            <div className='AwesomeFacts'>
                <div className='AwesomeNumbers'>
                    <p><span>1,952</span> </p><BiUserPlus color='#000' size={30} style={{marginLeft: 15}} />
                </div>
                <p style={{marginTop: 10}}>DAYS AND COUNTING</p>
            </div>
            <div className='AwesomeFacts'>
                <div className='AwesomeNumbers'>
                    <p><span>12,420</span> </p><BiUser color='#000' size={30} style={{marginLeft: 15}} />
                </div>
                <p style={{marginTop: 10}}>TOTAL INVESTORS</p>
            </div>
        </div>
    );
}

export default AwesomeFacts;