import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProjects} from '../store/actions/projects';
import ProjectItem from '../components/ProjectItem';
import '../styles/ProjectList.css';

class ProjectList extends Component {
    
    componentDidMount() {
      this.props.fetchProjects()
    }
    
    render(){
        const {projects} = this.props
        let projectList = projects.allProjects.map(p => (
            <ProjectItem
                key={p._id}
                date={p.createAt}
                title={p.title}
                subTitle={p.subTitle}
                description={p.description}
                username={p.founder.username} 
                />
        ));
        return(
            <div className="main">
               {projectList}
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        projects: state.projects
    }
}

export default connect(mapStateToProps, {fetchProjects})(ProjectList);
