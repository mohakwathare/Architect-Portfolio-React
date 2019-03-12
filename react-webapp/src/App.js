import React, { Component } from 'react';
import Routes from './Routes/routes';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          <NavBar />
          <Routes />
        </div>
    );
  }
}

export default App;
