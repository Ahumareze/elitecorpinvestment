import React from 'react';

import { FaDollarSign } from "react-icons/fa";
import { AiOutlineLineChart, AiOutlineBank } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";

const width = window.innerWidth;

function BalanceBox(props) {

    let box1 = (
        <AiOutlineBank size={26} color='#fff' />
    )
    if(props.tag === 'Total Deposit'){
        box1 = (
            <FaDollarSign size={30} color='#fff' />
        )
    }else if(props.tag === 'Total Earned'){
        box1 = (
            <AiOutlineLineChart size={30} color='#fff' />
        )
    }else if(props.tag === 'Total Withdrawn'){
        box1 = (
            <BsCashStack size={30} color='#fff' />
        )
    }

    return (
        <div className='Balance_box' style={width > 900 ? {width: '23%', marginRight: '2%'} : null}>
            <div className='BB_1'>
                <p className='BB_header'>{props.tag}</p>
                <p className='BB_balance'>${props.price}</p>
            </div>
            <div className='BB_2'>
                <div className='colored_box' style={{backgroundColor: props.color}}>
                    {box1}
                </div>
            </div>
        </div>
    );
}

export default BalanceBox;