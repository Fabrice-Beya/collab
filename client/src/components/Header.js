import React from 'react';
import '../styles/Header.css';

export default class Header extends React.Component {
  render() {
  
    return (
      
        <header className="masthead" >
          <div className="overlay">
          </div>
          <div className="container text-light">
              <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                  <div className="site-heading">
                    <br></br>
                    <br></br>
                    <h4>
                        A catalyst platform for finding collaborators.
                    </h4>
                    
                  </div>
                </div>
              </div>
          </div>
        </header>
      
    );
  }
}