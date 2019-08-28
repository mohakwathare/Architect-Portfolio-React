import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Routes from './Routes/Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Routes/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
