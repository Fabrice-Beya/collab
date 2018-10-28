import React from 'react';
import '../styles/AuthForm.css'

export default class AuthForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            profileImageUrl: "",
            password: ""
        }

    }

    handleChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       });
    }
    
  render() {
    const {email, username, profileImageUrl, password} = this.state
    const {buttonText, heading, register} = this.props
    return (
      <div className="authForm">
          <div className="row justify-content-md-center text-center">
            <div className="col-md-6 ">
            <form onSubmit={this.handleSubmit}>
            <h1>{heading}</h1>
            <div className='form-group'>
                <label for="username">Username</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="username" 
                    name="username" 
                    placeholder="Enter username" 
                    value={username}
                    onChange={this.handleChange}/>
            </div>
            {
                register && (
                <div>
                    <div className='form-group'>
                        <label for="email">Email address</label>
                        <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        name="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label for="profileImageUrl">Profile Image</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="profileImageUrl" 
                            name="profileImageUrl" 
                            placeholder="Enter profile image url"
                            value={profileImageUrl}
                            onChange={this.handleChange}/>
                    </div>
                </div>
                )
            }
           
            <div class="form-group">
                <label for="password">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}/>
            </div>
            <button type="submit" class="btn btn-primary">{buttonText}</button>
        </form>
            </div>
          </div>
      </div>
      
    );
  }
}