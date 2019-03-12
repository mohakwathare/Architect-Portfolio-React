import React, { Component } from 'react';
import axios from 'axios';
import aboutMeImage from '../../img/about.jpg';
import classes from './About.css';
import common from '../../css/common.css';
import bttn from '../../css/button.css';
import column from '../../css/column.css';
import Button from '@material-ui/core/Button';

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
    const secTitle = [classes.sectiontitle, classes.textcenter, classes.center];
    const button = [bttn.btn, bttn.btnprimary, bttn.btnlg, bttn.pagescroll];
    return (
        <div classname={classes.about} id="about">
          <div className={common.container}>
            <div className={secTitle.join(' ')}>
              <h2>About Me</h2>
              <hr/>
            </div>
            <div className={common.row}>
              <div> 
                <img src={aboutMeImage} className={classes.imgresponsive} alt="" /> 
              </div>
              <div>
                <div className={classes.abouttext}>
                  {this.state.aboutMeInfo.split("\n").map((i,key) => 
                    <p key={key}>{i}</p>
                  )}
                  <Button variant="outlined" color="inherit" href="/portfolio">My Portfolio</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;