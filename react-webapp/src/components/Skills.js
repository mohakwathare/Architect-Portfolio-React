import React, { Component } from 'react';
import axios from 'axios';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skills : []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:2000/getSkillsDetails')
    .then(response => {
      this.setState({
        skills : response.data
      });
    })
    .catch(error => {
      if(error){
        console.log(error);
      }
    })
  }

  render() {
    return (
        <div id="skills" className="text-center">
          <div className="container">
            <div className="section-title center">
              <h2>Skills</h2>
              <hr/>
            </div>
            <div className="row">
              {this.state.skills.map((item,key) => 
                <div key={key} className="col-md-3 col-sm-6 skill"> 
                  <CircularProgressbar className="chart" percentage={item.percentage} text={`${item.percentage}%`}
                  styles={{
                    text: {fill: '#fffff0',},
                    path: {stroke: '#fffff0',},
                    trail: { stroke: 'transparent' },
                  }}/>
                  <h4>{item.name}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
    );
  }
}

export default Skills;