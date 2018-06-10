import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPageCarousel from './components/MainPageCarousel';
import ImageModal from './components/ImageModal';
import Home from './components/Home';
import axios from 'axios';


class App extends Component {
  state={
    navIsOpen:'',
    active:'',
    imageModalIsOpen:false,
    currentImage:'',
    selectedPerson: '',
    images:''
  }
  componentWillMount(){
    axios.get('http://localhost:3000/wedding')
    // axios.get('https://just-us-api.herokuapp.com/wedding')
    .then((response)=> {
      console.log(response.data.data);
      this.setState({
        images: response.data.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
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
  handleSelectPerson = (e) =>{
    let person = e.target.value 
    console.log(e.target.value)
    axios.get(`http://localhost:3000/wedding/${person}`)
    // axios.get(`https://just-us-api.herokuapp.com/wedding/${person}`)
    .then((response)=> {
      this.setState({
        images: response.data.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    let { 
      navIsOpen,
      active,
      imageModalIsOpen,
      currentImage,
      images

    
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


          <Switch>
          <Route exact path="/" render={(props) => 
                (<Home 
                  navIsOpen={navIsOpen}
                  active={active}
                  openNav={this.openNav}
                  closeNav={this.closeNav}
                />)} 
          />
          <Route exact path="/photos" render={(props) => 

                (< MainPageCarousel 
                  images = {images}
                  settings = {{
                      className: "center",
                      centerMode: true,
                      infinite: true,
                      slidesToShow: 4,
                      speed: 1500,
                      autoplay:true,
                      autoplaySpeed: 4000,
                      adaptiveHeight: true,
                  }}
                  handleSelectPerson={this.handleSelectPerson}
                  openImageModal={this.openImageModal}
                  navIsOpen={navIsOpen}
                  active={active}
                  openNav={this.openNav}
                  closeNav={this.closeNav}
                />)} 
          />
            </Switch>
          </div>
      </Router>
      </div>

    );
  }
}

export default App;
