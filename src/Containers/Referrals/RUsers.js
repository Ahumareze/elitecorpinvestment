import React from 'react';

function RUsers({username, email}) {
    const newU = username.split('');
    return (
        <div className='RUsers'>
            <div className='RuserTitle'>{newU[0]}</div>
            <div className='RuserDetails'>
                <p className='RUsn'>{username}</p>
                <p className='RSecond'>{email}</p>
            </div>
        </div>
    );
}

export default RUsers;