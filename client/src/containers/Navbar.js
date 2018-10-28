import React, {Component} from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import {connect} from 'react-redux';
import logo from '../images/logo-light.png'

class Navbar extends Component {
    render(){
       
        return(
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav">
                <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="collab logo"/>
                </a>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <nav className="nav navbar-nav ml-auto ">
                            <Link exact to="/">
                                <li className="nav-item" role="presentation"><a class="nav-link">Create</a></li>
                            </Link>
                            <Link exact to="/">
                                <li className="nav-item" role="presentation"><a class="nav-link">Explore</a></li>
                            </Link>
                            <Link exact to="/">
                                <li className="nav-item" role="presentation"><a class="nav-link">About</a></li>
                            </Link>
                            <Link exact to="/register">
                                <li className="nav-item" role="presentation"><a class="nav-link">Register</a></li>
                            </Link>
                            <Link exact to="/login">
                                <li className="nav-item" role="presentation"><a class="nav-link">Login</a></li>
                            </Link>
                        </nav>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Navbar);
