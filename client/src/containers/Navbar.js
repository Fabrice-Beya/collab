import React, {Component} from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import {connect} from 'react-redux';
import logo from '../images/logo-light.png'
import {logout} from '../store/actions/auth';

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
      };
    render(){
        
        return(
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav">
                <div className="container">
                <Link exact to="/">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="collab logo"/>
                    </a>
                </Link>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    {this.props.currentUser.isAuthenticated ? (
                        <nav className="nav navbar-nav ml-auto ">
                        <Link exact to="/create">
                            <li className="nav-item" role="presentation"><a href="/" class="nav-link">Create</a></li>
                        </Link>
                        <Link exact to="/explore">
                            <li className="nav-item" role="presentation"><a href="/" class="nav-link">Explore</a></li>
                        </Link>
                        <Link exact to="/">
                            <li className="nav-item" role="presentation"><a href="/" class="nav-link">About</a></li>
                        </Link>
                        <Link exact to="/profile">
                            <li className="nav-item" role="presentation"><a href="/" class="nav-link">{this.props.currentUser.user.username}</a></li>
                        </Link>
                        
                        <li className="nav-item" role="presentation"><a onClick={this.logout} href="/" class="nav-link">Logout</a></li>
                        
                    </nav>
                    ) : (
                        <nav className="nav navbar-nav ml-auto ">
                            <Link exact to="/explore">
                                <li className="nav-item" role="presentation"><a href="/" class="nav-link">Explore</a></li>
                            </Link>
                            <Link exact to="/">
                                <li className="nav-item" role="presentation"><a href="/" class="nav-link">About</a></li>
                            </Link>
                            <Link exact to="/register">
                                <li className="nav-item" role="presentation"><a href="/" class="nav-link">Register</a></li>
                            </Link>
                            <Link exact to="/login">
                                <li className="nav-item" role="presentation"><a href="/" class="nav-link">Login</a></li>
                            </Link>
                        </nav>
                    )}
                        
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

export default connect(mapStateToProps, {logout})(Navbar);
