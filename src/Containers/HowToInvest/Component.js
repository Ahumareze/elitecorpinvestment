import React from 'react';

import './HowToInvest.css';
import Item from './Item';

function Component(props) {
    return (
        <div className='HowToInvest'>
            <section className='HTI_header'>
                <h4>How to invest here</h4>
                <p className='HTI_p'>Steps on how to invest</p>
            </section>
            <section>
                <Item text={'1. Click on Deposit'} />
                <Item text={'2. Choose your investment plan'} />
                <Item text={'3. Choose the coin you are investing in'} />
                <Item text={'4. Fill in your Email and your receiving wallet address'} />
                <Item text={'5. Click on invest'} />
                <Item text={'6. Send your Investment to the company\'s wallet address'} />
                <Item text={'7. Send the investment proof to our live support at the bottom right of the site or any of our authorized agent'} />
                <Item text={'8. Contact our 24/7 live support for assistance when need arises'} />
            </section>
        </div>
    );
}

export default Component;