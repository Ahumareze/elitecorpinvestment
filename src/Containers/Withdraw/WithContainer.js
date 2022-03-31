import React from 'react';
import WithItem from './WithItem';

function WithContainer({transaction}) {

    let view = (
        <p style={{textAlign: 'center'}} >No transaction made</p>
    )
    if(transaction)(
        view = (
            <>
                {Object.keys(transaction).map(i => (
                    <WithItem coinname={transaction[i].coinname} network={transaction[i].network} amount={transaction[i].amount} walletName={transaction[i].walletName} walletId={transaction[i].wallet} status={transaction[i].status} date={transaction[i].date} />
                ))}
            </>
        )
    )
    
    return (
        <div>
            {view}
        </div>
    );
}

export default WithContainer;