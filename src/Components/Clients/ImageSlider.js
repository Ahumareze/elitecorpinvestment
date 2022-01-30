import React from 'react';
import Properties from '../Utilities/Properties';

function ImageSlider({name, image, text, current}) {
    return (
        <div className='Client_ImageSlide'>
            <div className='CT_top'>
                <img src={image} />
            </div>
            <div className='CT_middle'>
                <p>{text}</p>
            </div>
            <div className='CT_bottom'>
                <h2>{name}</h2>
            </div>
            <div className='CT_colors'>
                <Properties active={current === 0 ? true : false} />
                <Properties active={current === 1 ? true : false}/>
                <Properties active={current === 2 ? true : false}/>
                <Properties active={current === 3 ? true : false}/>
                <Properties active={current === 4 ? true : false}/>
            </div>
        </div>
    );
}

export default ImageSlider;