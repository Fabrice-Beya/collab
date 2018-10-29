import {LOAD_PROJECTS, LOAD_ALL_PROJECTS} from '../actionTypes';

const DEFAULT_STATE = {
    projects:{}
}

export default (state = DEFAULT_STATE, action) =>{
    console.log(action.user)
    switch(action.type){
        case LOAD_PROJECTS:
            return {
                projects: action.projects
            }
        case LOAD_ALL_PROJECTS:
            return {
                projects: action.projects
            }
        default:
            return state;
    }
}