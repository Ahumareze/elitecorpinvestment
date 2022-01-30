import React from 'react';
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';

const width = window.innerWidth;

function LandingPageBox(props) {
    return (
        <div className='LandingBox'>
            <ImageSlider slides={SliderData} />
        </div>
    );
}

export default LandingPageBox;