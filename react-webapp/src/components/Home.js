import React from 'react';
import About from './About';
import Contact from './Contact';

const home = () => {

  render() {
    return (
        <div id='home'>
          <header id="header">
            <div className="intro text-center">
              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <div className="intro-text">
                      <h1>Radhika Goyal</h1>
                      <p>Architect  |  Artist  |  Blogger</p>
                      <a href="#about" className="btn btn-default btn-lg page-scroll">Learn More</a> </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <About />
          <Contact />
        </div>
    );
  }
}

export default home;