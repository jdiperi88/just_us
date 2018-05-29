import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPageCarousel from './components/MainPageCarousel';
import ImageModal from './components/ImageModal';
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
          <Header
            navIsOpen={navIsOpen}
            active={active}
            openNav={this.openNav}
            closeNav={this.closeNav}
          />
          <select onChange={(e)=>{
              this.handleSelectPerson(e)
          }}>
              <option value="All" disabled selected value>Move to...</option>
              <option value="Joey">Joey</option>
              <option value="Saida">Saida</option>
              <option value="MJ">MJ</option>
              <option value="Pam">Pam</option>
              <option value="John">John</option>
              <option value="Oswaldo">Oswaldo</option>
              <option value="Cricket">Cricket</option>
              <option value="Dilobar">Dilobar</option>
              <option value="Umid">Umid</option>
              <option value="Onajon">Onajon</option>
              <option value="Jasur">Jasur</option>
              <option value="Ziyoda">Ziyoda</option>
              <option value="Ulugbek">Ulugbek</option>
              <option value="Kryssy">Kryssy</option>
              <option value="Tiffany">Tiffany</option>
              <option value="Joban">Joban</option>
              <option value="Kenny">Kenny</option>
              <option value="Tyrone">Tyrone</option>
              <option value="Allison">Allison</option>
              <option value="Princie">Princie</option>
              <option value="Danielle">Danielle</option>
              <option value="Scott">Scott</option>
              <option value="Bailey">Bailey</option>
              <option value="Raj">Raj</option>
          </select>
          < MainPageCarousel 
            images = {images}
            settings = {{
                className: "center",
                centerMode: true,
                infinite: true,
                slidesToShow: 1,
                speed: 1500,
                autoplay:true,
                autoplaySpeed: 4000,
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
