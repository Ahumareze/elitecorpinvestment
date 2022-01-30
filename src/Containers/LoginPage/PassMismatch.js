import React from 'react';

function PassMismatch({cp, sp}) {
    return (
        <>
            {cp !== sp && <p style={{fontWeight: 600, color: 'red'}}>Passwords dosen't match</p> }
        </>
    );
}

export default PassMismatch;