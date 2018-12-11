import React, { Component } from 'react';

import './App.css';
import Men from './components/Menu'
import Carrusel from './components/Carrusel'
import Contenido from './components/Contenido'



class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Men/>
       <Carrusel/>
       <Contenido/>

      </div>
    );
  }
}

export default App;
