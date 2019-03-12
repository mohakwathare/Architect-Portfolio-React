import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import './Footer.css';
import '../../css/common.css'

class Footer extends Component {

	render() {
	    return (
	    	<div id="footer" className="footer">
	            <div className="container textcenter">
	              <div className="fnav">
	                <p>Copyright &copy; 2019 Radhika Goyal. Designed by Mohak Wathare</p>
	              </div>
	            </div>
	        </div>
	    )
	}
}

export default Footer;