import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './Home.css';
import About from '../About/About';
import Contact from '../Contact/Contact';

class Home extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      aboutMeInfo : '',
	      styleClasses : ''
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
		const styleClasses = {
		  buttonRoot: {
		  	justifyContent: 'center',
		  	alignItems: 'center',
		    '&:hover': {
		      color: 'black'
		    },
		    '&$tabSelected': {
		      color: '#337ab7',
		      borderColor: '#337ab7',
		      backgroundColor: '#fff'
		    },
		    '&:focus': {
		      color: 'white'
		    },
		  }
		};
		return (
			<React.Fragment>
				<header id="header">
				<div className="intro">
					<div className="overlay">
						<div className="container">
							<div className="row">
								<div className="intro-text col-lg-12">
								<h1>Radhika Goyal</h1>
			                	<p>Architect  |  Artist  |  Blogger</p>
			                	<Button variant="outlined" className={styleClasses.buttonRoot} href="#about">Learn More</Button>
			                	</div>
		                	</div>
		                </div>
					</div>
				</div>
				</header>
				<About aboutMeInfo={this.state.aboutMeInfo}/>
				<Contact />
			</React.Fragment>
		)
	}
	

}

export default Home;