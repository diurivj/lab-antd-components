import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import 'antd/dist/antd.css'

import DrawerCustom from './components/Example'


class App extends Component {
  render() {
    return (
        <div className="father">
            <MainContent/>

            <DrawerCustom />
            <Footer/>
        </div>
    );
  }
}

export default App;
