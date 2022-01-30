import React from 'react';
import './Error.css';
import errorIcon from '../../Assets/error.svg';
const width = window.innerWidth;

function Error(props) {
    return (
        <div className='ErrorScreen'>
            <img src={errorIcon} alt='' style={width > 700 ? {width: 400} : null} />
            <p>Network Error, Please Refresh Page</p>
        </div>
    );
}

export default Error;