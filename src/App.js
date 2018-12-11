import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Card } from 'antd';
//import { Card, Col, Row } from 'antd';

const { Meta } = Card;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type='primary'>
          Púchame, pero no hago nada
        </Button>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 340 }}
          cover={<img alt="example" src="https://scontent.fmex2-1.fna.fbcdn.net/v/t1.0-9/18056832_10154600168436687_6870168447056636885_n.jpg?_nc_cat=107&_nc_ht=scontent.fmex2-1.fna&oh=21617d0afe4f88b4fb027e8179711054&oe=5C65CFC3" />}
          >
        <Meta
          title="Cocociendo el pueblo de la china"
          description="En el puente de Isla Aguada, Campeche"
          />  
        </Card>,
        <Card
          hoverable
          style={{ width: 440 }}
          cover={<img alt="example" src="https://scontent.fmex2-1.fna.fbcdn.net/v/t1.0-9/20800116_10154944257536687_456821304795863077_n.jpg?_nc_cat=110&_nc_ht=scontent.fmex2-1.fna&oh=8f5a078b015ca7c7ef585b927a027d7f&oe=5CA9D08D" />}
          >
        <Meta
          title="Boda de Tiffa"
          description="Disfrutando en Puerto Escondido, Oax"
        />  
        </Card>,
        <Card
          hoverable
          style={{ width: 340 }}
          cover={<img alt="example" src="https://scontent.fmex2-1.fna.fbcdn.net/v/t1.0-9/41943873_10155868405581687_8564243373240614912_n.jpg?_nc_cat=100&_nc_ht=scontent.fmex2-1.fna&oh=8e1da6b41a1c0d3b9df2ae8b7a95b9fd&oe=5CAF4FBD" />}
          >
        <Meta
          title="Celebrando el 15 de septiembre"
          description="Monumento a la revolución, CDMX"
          />  
        </Card>
      </div>
      <div className="parrafito">
        <h3>
        Soy Oaxaqueño de corazón, llegué a la CDMX hace más de 9 años, me encantan todos los <br />
        deportes y pasar el rato con amigos y familia. Amo a mi perrija Emma y abajo les dejo una foto de ella.
        </h3>
      </div>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 510 }}
          cover={<img alt="Emma" src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/28277201_10155418899856687_4964410458290253934_n.jpg?_nc_cat=104&_nc_ht=scontent.fmex6-1.fna&oh=bf71925b2571f89c231011af1707d7d0&oe=5C64C218" />}
          >
        <Meta
          title="Emma y sho"
          description="Borregueándonos en las islas de CU"
        />  
        </Card>
      </div>

        {/* <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
            <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
            <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
            <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
          </Row>
        </div> */}

      </div>


    );
  }
}

export default App;
