import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {MenuComponent} from './components/Menu'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <MenuComponent  />
      </div>
    );
  }
}

export default App;