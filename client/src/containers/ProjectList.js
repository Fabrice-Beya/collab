import React from 'react';
import {connect} from 'react-redux';
import {fetchProjects} from '../store/actions/projects'

const ProjectList = props => {
    const {fetchProjects} = props
    return(
        <div className="row">
            <ProjectList fetchProjects={fetchProjects}/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, {fetchProjects})(ProjectList);