import React from 'react';
import ProjectList from '../containers/ProjectList';

export default class Explorepage extends React.Component {
  render() {
   return(
     <div>
      <div className="text-center">
        <br/>
        <br/>
        <h1>Available Projects</h1>
        <hr/>
      </div>
      <div className="row text-center">
        <ProjectList />
      </div>
      </div>
   );
  }
}