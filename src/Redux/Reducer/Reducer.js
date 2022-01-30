import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    token: null,
    loading: false,
    error: false,

    verifyScreen: false
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case(actionTypes.SETTOKEN):
            return {...state, token: actions.value};
        case(actionTypes.LOADING):
            return {...state, loading: actions.value};
        case(actionTypes.SETERROR):
            return {...state, error: actions.value};
        case(actionTypes.VERIFY_SCREEN):
            return {...state, verifyScreen: actions.value};
    }
    return state;
}

export default reducer