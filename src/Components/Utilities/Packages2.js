import React from 'react';

const width = window.innerWidth

function Packages(props) {
    return (
        <div className='PackageDiv' style={width > 900 ? {width: '35%', marginLeft:'2%', marginRight: '2%', borderColor: 'yellow'} : {borderColor: 'yellow'} }>
            <div className='package_header'>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <div className='package_circle'>
                        <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                            <h2>${props.num}</h2>
                            <p>in crypto</p>
                        </div>
                    </div>
                </div>
                <div className='steps_conntainer' >
                    <h2 style={{marginTop: 20}}>{props.title}</h2>
                </div>
            </div>
            <div className='Main_steps_container' style={{paddingTop: 10,paddingBottom: 10}}>
                <p><span style={{fontWeight: 600}}>5</span> TRADES</p>
                <p><span style={{fontWeight: 600}}>24HRS</span> Increment</p>
                <p>Variable Mining Power</p>
                <p>Shared Cloud Mining</p>
                <p>7 Days Contract</p>
                <p>{props.percent}% Daily Income</p>
                <p>Minimum Investment ${props.min}</p>
                <p>Maximum Investment {props.max}</p>
            </div>
            <div className='investnow_container'>
                <div className='investnow_btn' onClick={props.invest} style={{borderColor: '#03255C', backgroundColor: '#03255C'}}>
                    <p style={{color: '#fff'}}>Invest Now</p>
                </div>
            </div>
        </div>
    );
}

export default Packages;