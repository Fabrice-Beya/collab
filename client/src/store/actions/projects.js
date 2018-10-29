import { apiCall } from "../../services/api";
import { LOAD_PROJECTS, LOAD_ALL_PROJECTS } from "../actionTypes";
import { addError } from "./errors";

export function loadProjects(projects) {
  return {
    type: LOAD_PROJECTS,
    projects
  };
}

export function loadAllProjects(projects) {
    return {
      type: LOAD_ALL_PROJECTS,
      projects
    };
}

export function logout(){
  return dispatch => {
    localStorage.clear();
    dispatch(setCurrentUser({}));
  };
}

export function authUser(type, userData) {
  return dispatch => {
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/user/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem("jwtToken", token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve(); // indicate that the API call succeeded
        })
        .catch(err => {
          dispatch(addError(err.message));
          reject(); // indicate the API call failed
        });
    });
  };
}
