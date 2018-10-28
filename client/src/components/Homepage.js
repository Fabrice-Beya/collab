import React from 'react';
import Header from '../components/Header';

export default class Homepage extends React.Component {
  render() {
    const {currentUser} = this.props;

    if(!currentUser.isAuthenticated){
      return (
        <div>
          <Header buttonText="Get Started" message="A catalyst platform for finding collaborators." />
        </div>
        
      );
    } else {

    
    return (
      <div>
        <Header buttonText="Add a project" message="Welcome back!" />
      </div>
      
    );
    }
    
  }
}