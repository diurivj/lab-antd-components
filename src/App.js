import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { Carousel } from "antd";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel autoplay>
          <div>
            <img src="http://www.bandt.com.au/information/uploads/2016/03/portrait_designer_alexandermcqueen_slider.jpg" />
          </div>
          <div>
            <img
              src="https://ewedit.files.wordpress.com/2018/05/mcq_1-c-ann-ray.jpg"
              width="100%"
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/8n5qxmg5wnlx/6HKAoOxTdmy6OGuqkuk2My/66f09e43988d46d2145ce2ba995be4d6/promo327106826?fm=jpg&q=90"
              width="100%"
            />
          </div>
          <div>
            <img
              src="http://cdn.ismorbo.com/wp-content/uploads/2016/10/alexander-mcqueen.jpg"
              width="100%"
            />
          </div>
          <div>
            <img
              src="https://hips.hearstapps.com/ell.h-cdn.co/assets/15/40/1443988833-elle-pfw-ss16-collections-alexander-mcqueen-00-index.jpg"
              width="100%"
            />
          </div>
        </Carousel>
        <div className="form">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
