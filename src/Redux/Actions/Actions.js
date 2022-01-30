import axios from 'axios';
import * as actionTypes from './ActionTypes';

const key = 'AIzaSyAKreen5ywTxcGvxmLXAhZhFSx0u5L5N_s';
const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + key;
const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + key;
const verificationEmail = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + key;

export const init = () => {
    const localToken = localStorage.getItem('@localToken');
    return dispatch => {
        if(localToken){
            dispatch(setToken(localToken))   
        }else{
            dispatch(setToken(null))
        }
    }
}

export const signup = (email, password, fullname) => {
    console.log('Started')
    return dispatch => {
        dispatch(setLoading(true))
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post(url, authData)
            .then(r => {
                const token = r.data.idToken;
                const emailData = {
                    requestType: 'VERIFY_EMAIL',
                    idToken: token
                }
                axios.post(verificationEmail, emailData)
                    .then(r => {
                        dispatch(postUserdata(email, fullname, token))
                    })
                    .catch(e => dispatch(setLoading(false)))
            })
            .catch(e => {
                let errorM = 'Network Error'
                if(e.response){
                    errorM = e.response.data.error.message
                }
                dispatch(setLoading(false));
                dispatch(setError(errorM));
            })
    }
}

export const login = (email, password) => {
    
    return dispatch => {
        dispatch(setLoading(true));
        
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post(loginUrl, authData)
            .then(r => {
                localStorage.setItem('@localToken', r.data.idToken);
                localStorage.setItem('@localemail', r.data.email)
                dispatch(setToken(r.data.idToken));
                dispatch(setLoading(false));
                console.log(r.data)
            })
            .catch(e => {
                let errorM = 'Network Error'
                if(e.response){
                    errorM = e.response.data.error.message
                }
                dispatch(setLoading(false));
                dispatch(setError(errorM));
            })
    }
};

const postUserdata = (email, fullname, token) => {
    return dispatch=> {
        
        const data = {
            fullname: fullname,
            email: email,
            balance: 0,
            deposited: 0,
            profit: 0,
            withdrawn: 0,
            balance2: 0,
            deposited2: 0,
            profit2: 0,
            withdrawn2: 0,
            datePosted: new Date().toDateString()
        }

        axios.post('https://elite-corp-default-rtdb.firebaseio.com/users.json', data)
            .then(r => {
                // localStorage.setItem('@localToken', token);
                // localStorage.setItem('@localemail', email);
                // dispatch(setToken(token));
                dispatch(setLoading(false));
                dispatch(setVerifyScreen(email));
            })
            .catch(e => {
                console.log(e)
                dispatch(setLoading(false));
            })
    }
}

const setVerifyScreen = (email) => {
    return{
        type: actionTypes.VERIFY_SCREEN,
        value: email
    }
}

const setToken = (val) => {
    return{
        type: actionTypes.SETTOKEN,
        value: val
    }
};

const setLoading = (val) => {
    return{
        type: actionTypes.LOADING,
        value: val
    }
}

const setError = (val) => {
    return{
        type: actionTypes.SETERROR,
        value: val
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.clear();
        dispatch(setToken(null));
        console.log('Logged out')
    }
}