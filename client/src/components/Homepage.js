import React from 'react';
import Header from '../components/Header';
import PlainSection from '../components/PlainSection';

export default class Homepage extends React.Component {
  render() {
    const {currentUser} = this.props;
   return(
     <div>

    
    <div>
    { 
    currentUser.isAuthenticated ? (
      <Header buttonText="Add a project" message="Welcome back!" />
      ) : (
      <Header buttonText="Get Started" message="A catalyst platform for finding collaborators." />
      )
    }
    </div>
    <PlainSection
      bgColor="#fff"
      textColor="#161616"
      hr={true}
      title="What is Collab?"
      paragraph="Collab is an online space where people can find collaborators to work with on a project.
                  Once you register you will be able to post projects that you would like people to collaborate on
                  , and people who like you project will be able to connect with you." />


    </div>
   );
    
  }
}