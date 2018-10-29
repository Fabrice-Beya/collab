import React from 'react';
import '../styles/ProjectItem.css';
import { Link } from "react-router-dom";


const ProjectItem = ({title, description, profileImageUrl, username, date}) => {
    return (
        <div className="col-md-4">
        <div className="message-area project-item">
            <Link to="/">
                <h4>{title}</h4>
            </Link>
            <p>{description}</p>
            <Link to="/">{username} &nbsp;</Link>
        </div>
        </div>
        
    );
}

export default ProjectItem;