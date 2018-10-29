import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import projects from './project';

const rootReducer = combineReducers({
    currentUser,
    errors,
    projects
})

export default rootReducer




