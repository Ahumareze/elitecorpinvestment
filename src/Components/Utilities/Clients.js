import React, {useState, useEffect } from 'react';

import bg from '../../Assets/Clients/01.png';

import { ClientsData } from '../Clients/ClientsData';
import ImageSlider from '../Clients/ImageSlider';

import Properties from './Properties';

function Clients(props) {
    const [current, setCurrent] = useState(0);
    const length = 5;

    useEffect(() => {
        refresh()
    }, [current]);

    const refresh  = () => {
        setTimeout(() => {
            setCurrent(current === length - 1 ? 0 : current + 1 );
        }, 5000)
    }

    return (
        <div className='Clients_container' style={{backgroundImage: `url(${bg})`}}>
            {ClientsData.map((slide, index) => {
                return (
                    <div>
                        {index === current && 
                            <div className='transist'>
                                <ImageSlider 
                                    name={slide.name} 
                                    image={slide.img} 
                                    text={slide.text} 
                                    current={current}
                                />
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    );
}

export default Clients;