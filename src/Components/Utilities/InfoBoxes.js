import React from 'react';

function InfoBoxes(props) {
    const box1 = (
        <div className='Info_mini_box'>
            <img src={props.icon} alt=''/>
            <p><span style={{fontWeight: 'bold',}}>{props.title}:</span>{props.content}</p>
        </div>
    )
    return (
        <>
            {box1}
        </>
    );
}

export default InfoBoxes;