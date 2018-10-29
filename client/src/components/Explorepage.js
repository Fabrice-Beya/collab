import React from 'react';
import ProjectList from '../containers/ProjectList';

export default class Explorepage extends React.Component {
  render() {
    const {currentUser} = this.props;
   return(
     <div>
        <ProjectList />
    </div>
   );
  }
}