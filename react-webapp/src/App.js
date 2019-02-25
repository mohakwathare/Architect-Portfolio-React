import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import Routes from './Routes/routes.js';
import './css/bootstrap.css';
import './css/style.css';
import './css/prettyPhoto.css';
import './fonts/font-awesome/css/font-awesome.css';

class App extends Component {

  render() {
    return (
        <div>
          <div id="nav">
            <Navbar fixedTop bsStyle="custom">
              <Navbar.Header bsStyle="header">
                <Navbar.Brand>
                  <a href="#"></a>
                </Navbar.Brand>
              <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="/">Home</NavItem>
                  <NavItem eventKey={2} href="/skills">Skills</NavItem>
                  <NavItem eventKey={3} href="/blog">Blog</NavItem>
                  <NavItem eventKey={4} href="/portfolio">Portfolio</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>    
          <Routes />
          <div id="footer">
            <div className="container text-center">
              <div className="fnav">
                <p>Copyright &copy; 2019 Radhika Goyal. Designed by Mohak Wathare</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
