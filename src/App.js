import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {MenuComponent} from './components/Menu'
import Chichi from './components/Carousel'
import Calendar from './components/Calendar'
import Card from './components/Card'




class App extends Component {
  render() {
    return (
      <div className="App">
      <MenuComponent  />
      <Chichi/>
      <Calendar  />
      <Card/>
      <Header/>
      </div>
    );
  }
}

export default App;
