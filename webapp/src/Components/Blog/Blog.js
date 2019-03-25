import React, {Component} from 'react';
import './Blog.css';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import PoemPopover from '../PoemPopover/PoemPopover';

class Blog extends Component {

	constructor(props) {
    super(props);
    this.state = {
      blogDetails : [],
      imgPath : './blog/',
      poemClicked : false,
      currPoemContent: [],
      currPoemTitle: '',
      currPoemDate: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:2000/getBlogDetails')
    .then(response => {
      this.setState({
        blogDetails : response.data
      });
    })
    .catch(error => {
      if(error){
        console.log(error);
      }
    })
  }

  onClickHandlerPoem = (selectedPoem) => {
    console.log(selectedPoem.name + selectedPoem.date);
    console.log(selectedPoem.content);
    this.setState({
      poemClicked : true
    });
    this.state.blogDetails.find(poem => {
      if(poem.name === selectedPoem.name) {
        this.setState({
          currPoemDate: selectedPoem.date,
          currPoemTitle: selectedPoem.name,
          currPoemContent: selectedPoem.content
        });
      }
    });
  }

  handleClose = () => {
    this.setState({
      poemClicked : false
    });
  }

  render () {
    const styleClasses = {
      gridList: {
        width: 500,
        height: 450,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
    };
    const slash = '/';
  	return (
      <React.Fragment>
      <div id="blog" className="blog">
        <div className="container">
          <div className="sectiontitle textcenter center">
            <h2>Blog</h2>
            <hr/>
          </div>
          <GridList cellHeight={200} cols={3} spacing={25} className={styleClasses.gridList}>
            {this.state.blogDetails.map((poem,key) => (
              <GridListTile key={key} className="blog-item hover-bg">
                <img 
                className="imgresponsive"
                src={poem.image ? require(`${this.state.imgPath}${poem.name}${slash}${poem.image}`) : ''}
                alt="Project Title" 
                />
                <GridListTileBar
                  className="hover-text"
                  title={poem.name}
                  subtitle={poem.date}
                  onClick={() => this.onClickHandlerPoem(poem)}
                  actionIcon={
                    <IconButton className={styleClasses.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
          <PoemPopover 
            currPoemTitle={this.state.currPoemTitle} 
            currPoemDate={this.state.currPoemDate}
            currPoemContent={this.state.currPoemContent}
            open={this.state.poemClicked}
            close={this.handleClose}
          />
        </div>
      </div>
      </React.Fragment>
  	)
  };

}

export default Blog;