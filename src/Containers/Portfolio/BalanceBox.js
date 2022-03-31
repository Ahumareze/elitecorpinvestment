import React from 'react';

function BalanceBox({plan1, plan2, plan3, plan4, refBalance, title, showRefBal}) {
    const planone = plan1 ? plan1 : 0;
    const plantwo = plan2 ? plan2 : 0;
    const planthree = plan3 ? plan3 : 0;
    const planfour = plan4 ? plan4 : 0;

    const refBalancee = refBalance ? refBalance : 0;

    const view = (
        <>
            <p className='PFI_Title'>Referral Bonus</p>
            <p className='PFI_value'>${refBalancee}</p>
        </>
    )
    
    return (
        <div className='PortFolioItem' >
            <p className='PFI_Title'>{title}</p>
            <p className='PFI_value'>${planone + plantwo + planthree + planfour}</p>
            {showRefBal && view}
        </div>
    );
}

export default BalanceBox;