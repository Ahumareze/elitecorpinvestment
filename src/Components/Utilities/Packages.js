import React from 'react';

const width = window.innerWidth;

function Packages(props) {
    return (
        <div className='PackageDiv' style={width > 900 ? {width: '35%', marginLeft:'2%', marginRight: '2%', borderColor: 'yellow'} : {borderColor: 'yellow'} }>
            <div className='package_header'>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <div className='package_circle'>
                        <h3>Step {props.num}</h3>
                    </div>
                </div>
                <div className='steps_conntainer' >
                    <h2 style={{marginTop: 20}}>{props.title}</h2>
                </div>
            </div>
            <div className='Main_steps_container' style={{paddingTop: 10,paddingBottom: 10}}>
                <p>{props.children}</p>
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