import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_PROJECTS, LOAD_ALL_PROJECTS, ADD_PROJECT } from "../actionTypes";

export const loadProjects = (projects)=> ({
    type: LOAD_PROJECTS,
    projects
});

export const loadAllProjects = (projects)=> ({
  type: LOAD_ALL_PROJECTS,
  projects
});

export function addProject(project) {
  return {
    type: ADD_PROJECT,
    project
  };
}

export function fetchProjects() {
  return dispatch => {
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall("get", `/api/projects`)
        .then(res => {
          dispatch(loadAllProjects(res));
          resolve(); // indicate that the API call succeeded
        })
        .catch(err => {
          dispatch(addError(err.message));
          reject(); // indicate the API call failed
        });
    });
  };
}

export function addNewProject(userId, projectData) {
  return dispatch => {
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/users/${userId}/projects`, projectData)
        .then(({ token, ...project }) => {
          dispatch(addProject(project));
          resolve(); // indicate that the API call succeeded
        })
        .catch(err => {
          dispatch(addError(err.message));
          reject(); // indicate the API call failed
        });
    });
  };
}
