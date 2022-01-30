import React from 'react';

function LineChart(props) {
    return (
        <div className='chart_box'>
            <h4>{props.title}</h4>
            <div className='chart_width'>
                <div className='chart_main' style={{width: `${props.value}%`}}>
                    <p>{props.value}%</p>
                </div>
            </div>
        </div>
    );
}

export default LineChart;