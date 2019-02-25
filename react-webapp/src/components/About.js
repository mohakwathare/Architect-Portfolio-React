import React, { Component } from 'react';
import axios from 'axios';
import aboutMeImage from '../img/about.jpg';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aboutMeInfo : ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:2000/getAboutMeSection')
    .then(response => {
      this.setState({
        aboutMeInfo : response.data
      });
    })
    .catch(error => {
      if(error){
        console.log(error);
      }
    })
  }

  render() {
    return (
        <div id="about">
          <div className="container">
            <div className="section-title text-center center">
              <h2>About Me</h2>
              <hr/>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6"> <img src={aboutMeImage} className="img-responsive" alt="" /> </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  {this.state.aboutMeInfo.split("\n").map((i,key) => 
                    <p key={key}>{i}</p>
                  )}
                  <a href="#portfolio" className="btn btn-primary btn-lg page-scroll">My Portfolio</a> </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;