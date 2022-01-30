import React from 'react';

const width = window.innerWidth;

function Utility(props) {

    const div1 = (
        <div className='Utility'>
            <div className='ut_ri'>
                <img src={props.icon} alt='pic' />
            </div>
            <div className='ut_lf'>
                <h4>{props.title}</h4>
                <p style={{textAlign: 'justify'}}>{props.children}</p>
            </div>
        </div>
    )

    const div2 = (
        <div className='New_mini_box' style={width > 500  ? {width: 400, marginRight: 10, marginLeft: 10} : null }>
            <div className='NM_top'>
                <img src={props.icon} alt='pic' />
            </div>
            <div className='NM_middle'>
                <h2>{props.title}</h2>
            </div>
            <div className='NM_bottom'>
                <p style={{textAlign: 'justify'}}>{props.children}</p>
            </div>
        </div>
    )

    return (
        <>
            {div2}
        </>
    );
}

export default Utility;