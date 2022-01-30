import React, { useEffect, useState } from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import Box from './Box';

function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        refresh()
    }, [current])

    const refresh  = () => {
        setTimeout(() => {
            setCurrent(current === length - 1 ? 0 : current + 1 );
        }, 5000)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1 )
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1 );
    }

    return (
        <div className='ImageSlider'>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slideee activeee' : 'slideee' } key={index}>
                        {index === current && 
                            <Box 
                                img={slide.image} 
                                tag={slide.tag} 
                                title={slide.title} 
                                content={slide.content} 
                                prevSlide={prevSlide} 
                                nextSlide={nextSlide} 
                            />
                        }
                    </div>
                )
            })}
        </div>
    );
}

export default ImageSlider;