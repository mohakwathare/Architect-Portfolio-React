import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Routes from './Routes/Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Routes/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
