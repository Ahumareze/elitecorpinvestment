import React from 'react';

const width = window.innerWidth;

function Brains(props) {
    return (
        <div className='Brains'  style={width > 900 ? {width: '23%', marginRight: 20, borderColor: 'yellow'} : {borderColor: 'yellow'} }>
            <div className='Brains_pic'>
                <img src={props.pic} alt='' />
            </div>
            <div className='Brain_details'>
                <h3>{props.name}</h3>
                <h4>{props.job}</h4>
            </div>
        </div>
    );
}

export default Brains;