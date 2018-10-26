import React, {Component} from 'react'
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

class Navbar extends Component {
    render(){
       
        return(
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav">
                <div className="container">
                <a className="navbar-brand" href="/">collab</a>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <nav className="nav navbar-nav ml-auto ">
                            <NavLink exact to="/"><li className="nav-item" role="presentation"><a class="nav-link">Create</a></li></NavLink>
                            <NavLink exact to="/"><li className="nav-item" role="presentation"><a class="nav-link">Explore</a></li></NavLink>
                            <NavLink exact to="/"><li className="nav-item" role="presentation"><a class="nav-link">About</a></li></NavLink>
                            <NavLink exact to="/"><li className="nav-item" role="presentation"><a class="nav-link">Register</a></li></NavLink>
                            <NavLink exact to="/"><li className="nav-item" role="presentation"><a class="nav-link">Login</a></li></NavLink>
                        </nav>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
