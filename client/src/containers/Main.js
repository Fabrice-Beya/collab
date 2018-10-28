import React from 'react';
import { Switch, Route , withRouter, Redirect} from "react-router-dom";
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {connect} from 'react-redux';
import {authUser} from '../store/actions/auth';
import {removeError} from '../store/actions/errors';

const Main = props =>{
const {authUser, errors, removeError} = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props} />} />
                <Route exact path="/login" render={props => 
                    <AuthForm onAuth={authUser} removeError={removeError} errors={errors} buttonText="Login" heading="Welcome back" {...props} />} />
                <Route exact path="/register" render={props => 
                    <AuthForm onAuth={authUser} removeError={removeError} errors={errors} register buttonText="Register me" heading="Lets get you started" {...props} />} />
            </Switch>
        </div>
    );
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}
export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));