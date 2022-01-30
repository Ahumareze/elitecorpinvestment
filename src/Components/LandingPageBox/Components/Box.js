import React from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const width = window.innerWidth;

function Box({img, tag, title, content, prevSlide, nextSlide}) {
    const box1  =(
        <section>
            <div className='FA_left'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}  />
            </div>
            <div className='BOX_center'>
                <h1 className='anime1'>{tag}</h1>
                <h1 className='hlarge anime2'>{title}</h1>
                <p className='anime3' >{content}</p>
            </div>
            <div className='FA_right'>
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}  />
            </div>
        </section>
    )
    const box2 = (
        <section>
            <div className='BOX_center' style={{width: '100%', paddingLeft: 20}}>
                <h1 className='anime1'>{tag}</h1>
                <h1 className='hlarge anime2'>{title}</h1>
                <p className='anime3' style={{width: '90%'}} >{content}</p>
            </div>
        </section>
    )
    return (
        <div className='Image_backgroundBox' style={{backgroundImage: `url(${img})`}}>
            {width < 500 ? box2 : box1}
        </div>
    );
}

export default Box;