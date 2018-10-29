import React from 'react';
import ProjectList from '../containers/ProjectList';

export default class Explorepage extends React.Component {
  render() {
   return(
     
      <div className="row justify-content-md-center text-center">
        <div className="col-md-6">
        <h1>Available Projects</h1>
        </div>
            <ProjectList />
            
          </div>
   );
  }
}