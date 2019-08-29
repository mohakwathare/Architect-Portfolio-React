import React from 'react';
import { Container, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
	backgroundColor: '#222',
	color: '#777',
	position: 'fixed',
	left: '0',
	bottom: '0',
	width: '100%',
	zIndex: '9999'
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
    <Container maxWidth="sm">
		<Typography variant="body2" align="center">
			{ 'Copyright © ' }
			<Link color="inherit" href="http://thearchitalker.com/">
				Radhika Goyal
			</Link>{' '}
			{new Date().getFullYear()}
			{'. Built by '}
			<Link color="inherit" href="https://www.linkedin.com/in/mohak-wathare/">
				Mohak Wathare.
			</Link>
		</Typography>
    </Container>
    </footer>
  );
}