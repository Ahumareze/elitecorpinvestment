import React, { useState } from 'react';
import './ForgetScreen.css';
import axios from 'axios';

import Loading from '../../Components/Loading/Loading';

const key = 'AIzaSyAKreen5ywTxcGvxmLXAhZhFSx0u5L5N_s';
const url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + key

function ForgetScreen(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const [done, setDone]  = useState();
    const [email, setEmail] = useState()

    const sendVerification = () => {
        setLoading(true);
        const data = {
            requestType: 'PASSWORD_RESET',
            email: email
        }
        axios.post(url, data)
            .then(r => {
                console.log(r)
                setDone(true)
                setLoading(false)
            })
            .catch(e => {
                let errorM = 'Network Error'
                if(e.response){
                    errorM = e.response.data.error.message
                }
                setError(errorM)
                setLoading(false)
            })
    }

    let container = (
        <div className='ForgetDiv'>
            <h3>Reset Password</h3>
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <div className='ForgetPassword_Button' onClick={sendVerification}>
                <p>Reset</p>
            </div>
        </div>
    )

    if(done){
        container = (
            <div className='ForgetDiv'>
                <h3>Reset Password</h3>
                <div style={{width: '90%', marginLeft: '5%'}}>
                    <p className='success_FD'>A reset password link has been sent to your Email</p>
                    <p className='success_FD2'>Please reset password and sign in</p>
                </div>
            </div>
        )
    }

    return (
        <div className='ForgetScreen'>
            {!loading ? container: <Loading />}
            {error &&
            <div className='ForgetPasswordErrorBox'>
                <p>{error}</p>
            </div>}
            <div className='FG_back' onClick={() => props.history.push('/signin')}>
                <p>Back to login</p>
            </div>
        </div>
    );
}

export default ForgetScreen;