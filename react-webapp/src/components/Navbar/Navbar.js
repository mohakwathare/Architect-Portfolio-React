import React, { Component } from 'react';
import classes from './Navbar.css';
import common from '../../css/common.css';
import {AppBar,Toolbar,Typography,Tabs,Tab} from '@material-ui/core';

class NavBar extends Component {
	render() {
		return (
	        <div>
	        	<AppBar color="inherit" position="fixed">
		        	<Toolbar variant="dense">
			            <Typography variant="h6" color="inherit">
			                The Architalker
			            </Typography>
			            <Tabs centered pills="true">
				          <Tab label="Home" href="/" />
				          <Tab label="Skills" href="/skills" />
				          <Tab label="Blog" href="/blog" />
				          <Tab label="Portfolio" href="/portfolio" />
				          <Tab label="Paintings" href="/paintings" />
				        </Tabs>
			        </Toolbar>
		        </AppBar>
	        </div>
	    )
	}
}

export default NavBar;