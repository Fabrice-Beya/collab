import React from 'react';
import { Switch, Route , withRouter, Redirect} from "react-router-dom";
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {connect} from 'react-redux';

const Main = props =>{

    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props} />} />
                <Route exact path="/login" render={props => 
                    <AuthForm buttonText="Login" heading="Welcome back" {...props} />} />
                <Route exact path="/register" render={props => 
                    <AuthForm register buttonText="Register me" heading="Lets get you started" {...props} />} />
            </Switch>
        </div>
    );
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}
export default withRouter(connect(mapStateToProps, null)(Main));