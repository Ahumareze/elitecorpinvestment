import React, {useState} from 'react';

import captcha from '../../Assets/captcha.png';
import spinner from '../../Assets/loading.png';

import {FiCheck} from 'react-icons/fi'
import './Captcha.css';

function Captcha(props) {
    const [loading, setLoading] = useState(false)
    const [done, setDone] = useState(false);

    const controlBar = () => {
        setLoading(true);
        setTimeout(() => {
            setDone(true)
        }, 5000)
    }

    const checkBox = (
        <div className='Checkbox_captcha' onClick={controlBar} />
    )

    let loader = (
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
    if(done){
        loader = (
            <FiCheck size={33} color='green' />
        )
    }
    
    return (
        <div className='Captcha'>
            <div className='C1'>
                <div className='B1'>
                    {!loading ? checkBox : loader}
                </div>
                <div className='B2'>I'm not a robot</div>
            </div>
            <div className='C2'>
                <img src={captcha} />
            </div>
        </div>
    );
}

export default Captcha;