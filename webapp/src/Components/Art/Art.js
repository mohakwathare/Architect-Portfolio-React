import React, {Component} from 'react';
import './Art.css';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class Art extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artworks : [],
            artworkImgPath : './artworks/',
        }
    }

    componentDidMount() {
        axios.get('/api/getArtworks')
        .then(response => {
        console.log(response.data)
        this.setState({
            artworks : response.data
        });
        })
        .catch(error => {
        if(error){
            console.log(error);
        }
        })
    }

    render () {
        const slash = '/';
        return (
            <React.Fragment>
                <div id="art">
                    <div className="container">
                        <div className="sectiontitle textcenter center">
                            <h2>Art</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="carousel">
                        <Carousel fade='true' interval='10000'>
                            {this.state.artworks.map((artwork,key) => (
                            <Carousel.Item>
                                <img 
                                className="d-block w-100"
                                src={artwork.image ? require(`${this.state.artworkImgPath}${artwork.name}${slash}${artwork.image}`) : ''}
                                alt='Artwork'
                                />
                                <Carousel.Caption>
                                    <h3>{artwork.name}</h3>
                                    <p>{artwork.date}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Art;