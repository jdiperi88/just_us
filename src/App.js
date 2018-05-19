import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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

            test
          </div>
      </Router>
      </div>

    );
  }
}

export default App;
