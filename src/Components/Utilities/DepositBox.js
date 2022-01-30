import React, {useState} from 'react';
import InputBox from './InputBox';

const width = window.innerWidth;

function DepositBox(props) {

    const [coinname, setCoinName] = useState();
    const [amount, setAmount] = useState();
    const [wallet, setwallet] = useState();
    const [recievingId, setRecievingId] = useState();
    
    const onClick = () => {
        const data = {
            coinname,
            amount,
            wallet,
            recievingId
        }
        props.onClick(data)
    }
    return (
        <div className='DepositBox' style={width > 700 ? {width: '60%', marginLeft: '20%'} : null }>
            <div className='Coin_form'>
                <p className='CF_title'>{props.title}</p>
                <InputBox name={props.boxes[0]} color='yellow' change={e => setCoinName(e)} />
                <InputBox name={props.boxes[1]} color='yellow' change={e => setAmount(e)} />
                <InputBox name={props.boxes[2]} color='yellow' change={e => setwallet(e)} />
                <InputBox name={props.boxes[3]} color='yellow' change={e => setRecievingId(e)} />
                {props.errorMessage ? <p className='CF_error'>{props.errorMessage}</p> : null}
                {props.extraMessage ? <p style={{marginTop: 20, fontWeight: 600, textAlign: 'justify'}}>{props.extraMessage}</p> : null}
            </div>
            <div className='DB_bottom'>
                <div className='Invest_button' onClick={onClick} style={{backgroundColor: '#03255C'}}>
                    <p>{ !props.loading ? props.button : 'loading...'}</p>
                </div>
            </div>
        </div>
    );
}

export default DepositBox;