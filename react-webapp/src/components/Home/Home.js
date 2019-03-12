import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import classes from './Home.css';
import common from '../../css/common.css';
import '../../css/button.css';
import {Typography, Button} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';

const home = props => {
    const textCol = {};
    return (
        <div id='home'>
          <header id="header">
            <div className={[classes.intro, common.textcenter].join(' ')}>
              <div className={classes.overlay}>
                <div className={common.container}>
                  <div className={common.row}>
                    <div className={classes.introtext}>
                      <Typography align="center" variant="h1" color="textPrimary">Radhika Goyal</Typography><br/>
                      <Typography align="center" paragraph="true">Architect  |  Artist  |  Blogger</Typography>
                      <Button variant="outlined" className="btn btndefault btnlg" href="#about">Learn More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <br />
          <br />
          <About />
          <br />
          <br />
          <Contact />
        </div>
    );
}

export default home;