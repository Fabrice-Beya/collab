import {SET_CURRENT_USER} from '../actionTypes';

const DEFAULT_STATE = {
    isAuthenticated: false,
    user:{}
}

export default (state = DEFAULT_STATE, action) =>{
    console.log(action.user)
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                // if the user object returned has keys we assume it is authenticated...
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            }
        default:
            return state;
    }
}