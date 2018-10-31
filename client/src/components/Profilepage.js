import React from 'react';
import Profile from '../components/Profile';

export default class Profilepage extends React.Component {
  render() {
  const {currentUser} = this.props
   return(
     <div>
      <div className="row text-center">
        <Profile currentUser={currentUser}/>
      </div>
      </div>
   );
  }
}