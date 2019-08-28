import React,{ Component } from 'react';
import { Button } from '@material-ui/core';
import './Contact.css';
import axios from 'axios';

class Contact extends Component {
	constructor(props) {
      super(props);
      this.state = {
        name:'',
        email:'',
        message:''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }
  
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:2000/sendEmail', {
      name: this.state.name,
      senderEmail : this.state.email,
      message: this.state.comment
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      if(error){
        console.log(error);
      }
    })
  }
  render() {
  return (
    <React.Fragment>
      <div className="contact textcenter" >
        <div className="overlay">
          <div className="container">
            <div className="col-sm-12 sectiontitle center">
              <h2>Get In Touch</h2>
              <hr/>
            </div>
            <form className="contactform" onSubmit={this.handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 formgroup">
                    <input 
                    type="text" 
                    id="name" 
                    className="formcontrol" 
                    placeholder="Name" 
                    required="required" 
                    onChange={this.handleNameChange}/>
                  </div>
                  <div className="col-sm-6 formgroup" alignItems="center">
                    <input 
                    type="email" 
                    id="email" 
                    className="formcontrol" 
                    placeholder="Email" 
                    required="required" 
                    onChange={this.handleEmailChange}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 formgroup" alignItems="center">
                    <textarea 
                    name="message" 
                    id="message" 
                    className="formcontrol" 
                    rows="4" 
                    placeholder="Message" 
                    required
                    onChange={this.handleCommentChange}></textarea>
                  </div>
                  <p id="errorblock" className="helpblock textdanger"></p>
                </div>
              </div>
              <Button type="submit" variant="outlined" color="inherit">Send Email</Button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
  }
}

export default Contact;
