import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {AppBar,Toolbar,Typography,Tabs,Tab} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBarRoot: {
  	position: 'relative',
  	minHeight: 50,
  	minWidth: 20,
  	backgroundColor: '#222',
    display: 'block'
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
  	justifyContent: 'center',
  	alignItems: 'center',
    textTransform: 'initial',
    minWidth: 72,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#eee',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#337ab7',
      borderColor: '#337ab7',
      backgroundColor: '#fff'
    },
    '&:focus': {
      color: '#337ab7',
      backgroundColor: 'black'
    },
  },
  tabSelected: {
  	color: '#337ab7',
    backgroundColor: 'black'
  }
}));

const Navbar = props => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<AppBar position="fixed" >
				<Toolbar className={classes.appBarRoot}>
					<Typography variant="h6" color="inherit"> The Architalker</Typography>
					<Tabs classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
						<Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Home" href='/'/>
						<Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Skills" href='/skills'/>
						<Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Blog" href='/blog'/>
						<Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Portfolio" href='/portfolio'/>
						<Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Art" href='/art'/>
					</Tabs>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	)

}

export default Navbar;