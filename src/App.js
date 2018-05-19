import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPageCarousel from './components/MainPageCarousel';

class App extends Component {
  state={
    navIsOpen:'',
    active:'',
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
  render() {
    let { 
      navIsOpen,
      active

    
    } = this.state
    return (
      <div className="App">
        <Router >
          <div>
          <Header
            navIsOpen={navIsOpen}
            active={active}
            openNav={this.openNav}
            closeNav={this.closeNav}
          />
          < MainPageCarousel 
            images = {['untitled-5','untitled-6']}
            settings = {{
                className: "center",
                centerMode: true,
                infinite: true,
                slidesToShow: 1,
                speed: 500,
            }}
          />

            test
          </div>
      </Router>
      </div>

    );
  }
}

export default App;
