import React from 'react';
import aboutMeImage from '../../Images/about.jpg';
import { Button } from '@material-ui/core';
import './About.css';

const about = props => {
    return (
        <React.Fragment>
          <div id="about" className="about">
            <div className="container">
            <div className="col-sm-12 sectiontitle textcenter center">
              <h2>About Me</h2>
              <hr/>
            </div>
            <div className="row">
              <div className="col">
                <img src={aboutMeImage} className="imgresponsive" alt="" /> 
              </div>
              <div className="col abouttext">
                {props.aboutMeInfo.split("\n").map((i,key) => 
                  <p key={key}>{i}</p>
                )}
                <Button variant="outlined" color="inherit" href="/portfolio">My Portfolio</Button>
              <div>  
            </div>
                </div>
              </div>
              </div>
            </div>
        </React.Fragment>
    );
}

export default about;