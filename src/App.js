import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPageCarousel from './components/MainPageCarousel';
import ImageModal from './components/ImageModal';

class App extends Component {
  state={
    navIsOpen:'',
    active:'',
    imageModalIsOpen:false,
    currentImage:''
  }
  openNav=()=>{
    this.setState({
      navIsOpen: this.state.navIsOpen == ''?'open':'',
      active: this.state.active == ''?'active':''

  })
  }
  closeNav=()=>{
    this.setState({
      navIsOpen: '',
      active:''
    })
  }
  openImageModal=(image)=> {
    this.setState({
      imageModalIsOpen: true,
      currentImage:image
    });
  }
  closeModal=()=> {
    this.setState({
      imageModalIsOpen: false,
    });
  }
  render() {
    let { 
      navIsOpen,
      active,
      imageModalIsOpen,
      currentImage

    
    } = this.state
    return (
      <div className="App">
        <Router >
          <div>
          <ImageModal
            imageModalIsOpen={imageModalIsOpen}
            openImageModal={this.openImageModal}
            closeModal={this.closeModal}
            image={currentImage}
          />
          <Header
            navIsOpen={navIsOpen}
            active={active}
            openNav={this.openNav}
            closeNav={this.closeNav}
          />
          < MainPageCarousel 
            images = {['115','116']}
            settings = {{
                className: "center",
                centerMode: true,
                infinite: true,
                slidesToShow: 1,
                speed: 500,
            }}
            openImageModal={this.openImageModal}
          />

            test
          </div>
      </Router>
      </div>

    );
  }
}

export default App;
