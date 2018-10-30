import {LOAD_PROJECTS, LOAD_ALL_PROJECTS, ADD_PROJECT} from '../actionTypes';


const DEFAULT_STATE = {
    myProjects:[],
    allProjects:[]
}

export default (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        case ADD_PROJECT:
            return {...state.allProjects, allProjects: {...action.project}}
        case LOAD_PROJECTS:
            return {...state.myProjects, myProjects: [...action.projects]}
        case LOAD_ALL_PROJECTS:
            return {...state.allProjects, allProjects: [...action.projects]}
        default:
            return state;
    }
}