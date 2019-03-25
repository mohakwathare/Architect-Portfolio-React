import React from 'react';
import {Grid, Button} from '@material-ui/core';
import './Contact.css';

const contact = props => {
  return (
    <React.Fragment>
      <div className="contact textcenter" >
        <div className="overlay">
          <div className="container">
            <Grid item xs={12} className="sectiontitle center" alignItems="center">
                <h2>Get In Touch</h2>
                <hr/>
              </Grid>
              <form className="contactform">
                <Grid container xs={12} spacing={40} alignItems="center" justify="justify">
                  <Grid item xs={6} className="formgroup" alignItems="center">
                    <input type="text" id="name" className="formcontrol" placeholder="Name" required="required" />
                    <p className="helpblock textdanger"></p>
                  </Grid>
                  <Grid item xs={6} className="formgroup" alignItems="center">
                    <input type="email" id="email" className="formcontrol" placeholder="Email" required="required" />
                    <p className="helpblock textdanger"></p>
                  </Grid>
                </Grid>
                <Grid item xs={12} className="formgroup" alignItems="center">
                  <textarea name="message" id="message" className="formcontrol" rows="4" placeholder="Message" required></textarea>
                  <p className="helpblock textdanger"></p>
                </Grid>
                <Button variant="outlined" color="inherit">Send Email</Button>
              </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default contact;
