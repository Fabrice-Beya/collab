import React from 'react';
import '../styles/Header.css';

export default class Header extends React.Component {
  render() {
  
    return (
      
        <header className="masthead" >
          <div className="container text-light text-center">
              <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                    <br></br>
                    <br></br>
                    <h4>
                        A catalyst platform for finding collaborators.
                    </h4>
                    <br></br>
                    <button className="btn btn-light btn-md">
                      Get Started
                    </button>
                  
                </div>
              </div>
          </div>
        </header>
      
    );
  }
}