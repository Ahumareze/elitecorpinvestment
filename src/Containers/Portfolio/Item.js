import React from 'react';

function Item({title, balance, active, expired, open}) {

    let view = <p className='portActivep'>Active</p>
    if(active === 1){
        view = <p className='Active'>Active</p>
    }
    let view2 = <p className='portActivep'>Expired</p>
    if(expired === 1){
        view2 = <p className='Expired'>Expired</p>
    }
    return (
        <div className='PortFolioItem' onClick={() => open()} >
            <p className='PortfolioTitle'>{title}</p>
            <p className='PortfolioBalance'>${balance ? balance : 0}</p>
            <div className='PortFolioBottom'>
                {view}
                {view2}
            </div>
        </div>
    );
}

export default Item;