import React from 'react';
import '../styles/AuthForm.css'

export default class ProjectNew extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
        }
    }

    handleChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewProject(this.props.currentUser.user.id, this.state)
        .then(() => {
            this.props.history.push("/explore");
        })
        .catch(()=>{
            return;
        })
    }
    
  render() {
    const {title, description} = this.state
    const {errors, history, removeError} = this.props

    //listen for any change in route then remove previous errors
    if (errors.message) {
        const unlisten = history.listen(() => {
          removeError()
          unlisten()
        })
      }

    return (
      <div className="authForm">
          <div className="row justify-content-md-center">
            <div className="col-md-6 ">
            <form onSubmit={this.handleSubmit}>
            <h1 className="text-center">New Project</h1>
            {errors.message && 
                <div className="alert alert-danger">{errors.message}</div>
            }
            <div className='form-group'>
                <label for="username">Title</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="title" 
                    name="title" 
                    placeholder="Enter title" 
                    value={title}
                    onChange={this.handleChange}/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea  
                    class="form-control" 
                    id="description" 
                    name="description" 
                    placeholder="Describe your project"
                    rows="5"
                    value={description}
                    onChange={this.handleChange}/>
            </div>
            <button type="submit" class="btn btn-dark btn-block">Submit</button>
        </form>
            </div>
          </div>
      </div>
      
    );
  }
}