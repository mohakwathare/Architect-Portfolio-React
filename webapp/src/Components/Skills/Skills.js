import React, {Component} from 'react';
import './Skills.css';
import axios from 'axios';
import CircularProgressbar from 'react-circular-progressbar';
import Grid from '@material-ui/core/Grid';

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
  		<div id="skills" className="textcenter skills">
          <div className="container">
            <div className="sectiontitle center">
              <h2>Skills</h2>
              <hr/>
            </div>
            <Grid container xs={12}>
              {this.state.skills.map((item,key) => 
                <Grid item key={key} xs={3} className="skill"> 
                  <CircularProgressbar 
                  initialAnimation 
                  className="chart" 
                  percentage={item.percentage} 
                  text={`${item.percentage}%`}
                  styles={{
                    text: {fill: '#fffff0', fontSize: '21px'},
                    path: {stroke: '#fffff0',},
                    trail: { stroke: 'transparent' },
                  }}/>
                  <h4>{item.name}</h4>
                </Grid>
              )}
            </Grid>
          </div>
        </div>
  	)
  };
}

export default Skills;