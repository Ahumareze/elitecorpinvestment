import React from 'react';

import {FiX, FiCheck} from 'react-icons/fi'

function LoginError({error}) {

    const v1 = (
        <>
            <FiX color='red' size={22} style={{marginRight: 6}} />
            <p style={{margin: 0, fontWeight: 600, color: 'red'}}>Password too short</p>
        </>
    );

    const v2 = (
        <>
            <p style={{margin: 0, fontWeight: 600, color: 'green'}}>Strong Password</p>
        </>
    )

    return (
        <div style={{display: 'flex', paddingBottom: 10, alignItems: 'center'}}>
             {!error ? v1 : v2}
        </div>
        
    );
}

export default LoginError;