import React from 'react';
import '../styles/ProjectItem.css';
import { Link } from "react-router-dom";


const ProjectItem = ({title, description, profileImageUrl, subTitle, username, date}) => {
    return (
         <div className="col-md-6">
        <div className="message-area project-item">
            <Link to="/">
                <h4>{title}</h4>
                <h6> {subTitle}</h6>
            </Link>
            {/* <p>{description}</p> */}
            <Link to="/" className="text-left">{username} &nbsp;</Link>
        </div>
         </div>
        
    );
}

export default ProjectItem;