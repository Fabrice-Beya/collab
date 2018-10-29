import React from 'react';
import ProjectNew from './ProjectNew';

export default class Createpage extends React.Component {
  render() {
    const {currentUser, removeError, errors, addNewProject, history} = this.props;
   return(
     <div>
        <ProjectNew history={history} addNewProject={addNewProject} currentUser={currentUser} removeError={removeError} errors={errors} />
    </div>
   );
  }
}