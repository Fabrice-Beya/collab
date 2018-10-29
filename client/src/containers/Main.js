import React from 'react';
import { Switch, Route , withRouter} from "react-router-dom";
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import Createpage from '../components/Createpage';
import Explorepage from '../components/Explorepage';
import {connect} from 'react-redux';
import {authUser} from '../store/actions/auth';
import {addNewProject} from '../store/actions/projects';
import {removeError} from '../store/actions/errors';


const Main = props => { 
const {authUser, errors, removeError, currentUser, addNewProject} = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
                <Route exact path="/create" render={props => <Createpage addNewProject={addNewProject} currentUser={currentUser} removeError={removeError} errors={errors} {...props} />} />
                <Route exact path="/explore" render={props => <Explorepage currentUser={currentUser} {...props} />} />
                <Route exact path="/login" render={props => 
                    <AuthForm onAuth={authUser} removeError={removeError} errors={errors} buttonText="Login" heading="Welcome back" {...props} />} />
                <Route exact path="/register" render={props => 
                    <AuthForm onAuth={authUser} removeError={removeError} errors={errors} register buttonText="Register me" heading="Lets get you started" {...props} />} />
            </Switch>
        </div>
    );
}

function mapStateToProps(state) {
    return {
      currentUser: state.currentUser,
      errors: state.errors,
      projects: state.projects
    };
  }
  
  export default withRouter(
    connect(mapStateToProps, { authUser, removeError, addNewProject })(Main)
  );