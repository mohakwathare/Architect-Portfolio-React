import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogDetails : [],
      currentPage : [],
      imgPath : './datafiles/blog/',
      lastIndex : 0,
      totalItems : 0,
      noPrevious : true,
      noNext : true,
      isPoemHidden : true,
      currPoemTitle : '',
      currPoemDate : '',
      currPoemImagePath : '',
      currPoemContent : ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:2000/getBlogDetails')
    .then(response => {
      this.setState({
        blogDetails : response.data
      });
      this.setState({
        totalItems : this.state.blogDetails.length
      });
      this.fillInitialPage();
      if (this.state.totalItems > 3) {
        this.setState({
          noNext : false
        });
      }
    })
    .catch(error => {
      if(error){
        console.log(error);
      }
    })
  }

  fillInitialPage = () => {
    let i = 0;
    for (; i <= this.state.lastIndex + 3 && i < this.state.totalItems ; i++) {
      if (i === this.state.totalItems - 1) {
        this.setState({
          noNext : true
        });
      } 
      this.state.currentPage.push(this.state.blogDetails[i]);
    }
    this.setState({
      lastIndex : (i - 1)
    });
  };

  removeElementsFromList = (list) => {
    for (let i = 0 ; i < 4 ; i++) {
      list.pop();
    }
    return list;
  }

  clickPrevious = () => {
    this.setState({
      currentPage : this.removeElementsFromList(this.state.currentPage)
    });
    let i = this.state.lastIndex - 7
    for (; i <= this.state.lastIndex - 4 && i >= 0 ; i++) {
      if (i === 0) {
        this.setState({
          noPrevious : true
        });
      }
      this.state.currentPage.push(this.state.blogDetails[i]);
    }
    this.setState({
      lastIndex : (i - 1),
      noNext : false
    });

  }

  clickNext = () => {
    this.setState({
      currentPage : this.removeElementsFromList(this.state.currentPage)
    });
    let i = this.state.lastIndex + 1 
    for (; i <= this.state.lastIndex + 4 && i < this.state.totalItems ; i++) {
      if (i === this.state.totalItems - 1) {
        this.setState({
          noNext : true
        });
      }
      this.state.currentPage.push(this.state.blogDetails[i]);
    }
    this.setState({
      lastIndex : (i - 1),
      noPrevious : false
    });
  }

  onClickPoem = (poem) => {
    console.log(poem.name + poem.date);
    this.setState({
      currPoemTitle : poem.name,
      currPoemDate : poem.date,
      currPoemImagePath : poem.image ? poem.image : '',
      currPoemContent : poem.content
    });
    this.setState({
      isPoemHidden : false
    });
  }

  render() {
    const slash = '/';
    return (
        <div id="blog">
          <div className="container">
            <div className="section-title text-center center">
              <h2>Blog</h2>
              <hr/>
            </div>
            <div className="row">
              <div className="portfolio-items">
                {this.state.currentPage.map((poem,key) => 
                  <div className="col-sm-6 col-md-3 col-lg-3 web" key={key}>
                    <div className="portfolio-item">
                      <div className="hover-bg"> 
                        <a title="Poem Description" rel="prettyPhoto" onClick={() => this.onClickPoem(poem)}>
                        <div className="hover-text">
                          <h4>{poem.name}</h4>
                          <small>{poem.date}</small> 
                        </div>
                        <img src={poem.image ? require(`${this.state.imgPath}${poem.name}${slash}${poem.image}`) : ''} className="img-responsive" alt="Project Title" /> </a> </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
          </div>
          <div id="poem" hidden={this.state.isPoemHidden}>
            <div className="container">
              <div className="section-title text-center center">
                <h2>{this.state.currPoemTitle}</h2>
                <hr/>
                <h3>{this.state.currPoemDate}</h3>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-6"> 
                  <img src={this.state.currPoemImagePath ? require(`${this.state.imgPath}${this.state.currPoemTitle}${slash}${this.state.currPoemImagePath}`) : ''} className="img-responsive" alt="" /> 
                </div>
                <div className="col-xs-12 col-md-6">
                  <div className="about-text">
                    {this.state.currPoemContent.split("\n").map((i,key) => 
                      <p key={key}>{i}</p>
                    )}
                  </div>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Blog;