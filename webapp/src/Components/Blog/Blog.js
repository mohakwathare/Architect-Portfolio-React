import React, {Component} from 'react';
import './Blog.css';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core';
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
      console.log(response.data)
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
        height: 500,
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
          <GridList cellHeight={200} cols={2} spacing={30} className={styleClasses.gridList}>
            {this.state.blogDetails.map((poem,key) => (
              <GridListTile key={key} className="blog-item hover-bg">
                <img 
                className="imgresponsive"
                src={poem.image ? require(`${this.state.imgPath}${poem.name}${slash}${poem.image}`) : ''}
                alt="Project Title" 
                />
                <GridListTileBar
                  title={poem.name}
                  subtitle={poem.date}
                  onClick={() => this.onClickHandlerPoem(poem)}
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