import {combineReducers} from 'redux';
import currentuser from './currentUser';
import errors from './errors';

const rootReducer = combineReducers({
    currentuser,
    errors
})

export default rootReducer




