import React from 'react';
import '../styles/ProjectItem.css';
import defaultProfileImage from '../images/default-profile-picture.png'
import '../styles/Profile.css';


const Profile = ({currentUser}) => {
    return (
         <div className="col-md-12 profile" >
            <div className="text-center">
            <img src={defaultProfileImage} alt=""/>
                <h4>{currentUser.user.username}</h4>
                <h6> {currentUser.user.email}</h6>
            </div>
         </div>
    );
}

export default Profile;