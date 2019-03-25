import React from 'react';
import aboutMeImage from '../../Images/about.jpg';
import {Button, Grid} from '@material-ui/core';
import './About.css';

const about = props => {
    return (
        <React.Fragment>
          <Grid container id="about" className="about container" spacing={24} justify="justify">
            <Grid item xs={12} className="sectiontitle textcenter center">
              <h2>About Me</h2>
              <hr/>
            </Grid>
            <Grid item xs={6} className="row">
              <img src={aboutMeImage} className="imgresponsive" alt="" /> 
            </Grid>
            <Grid item xs={5} justify="center" className="abouttext row">
              {props.aboutMeInfo.split("\n").map((i,key) => 
                <p key={key}>{i}</p>
              )}
              <Button variant="outlined" color="inherit" href="/portfolio">My Portfolio</Button>
            </Grid>
          </Grid>
        </React.Fragment>
    );
}

export default about;