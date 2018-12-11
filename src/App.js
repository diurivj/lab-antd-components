import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Form from "./components/Form"
import CoolButton from "./components/CoolButton"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <CoolButton/>
      </div>
    );
  }
}

export default App;
