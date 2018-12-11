import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd'
import { Carousel } from 'antd';
import { Checkbox } from 'antd';
import { Menu, Icon } from 'antd';
import { DatePicker } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class App extends Component {
  
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <div className="" style={{display: 'flex'}}>
       <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Menu</span></span>}>
          <MenuItemGroup key="g1" title="Puglandia">
            <Menu.Item key="1">Pugs</Menu.Item>
            <Menu.Item key="2">Dieta de Pugs</Menu.Item>
          
            <Menu.Item key="3">Cuidados</Menu.Item>
            <Menu.Item key="4">Contacto</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        
      </Menu>
        <Carousel autoplay >
    <div><img src="https://www.perrospug.net/wp-content/uploads/2015/04/pug1.jpg"></img></div>
    <div><img src="http://www.twitrcovers.com/wp-content/uploads/2014/02/Pet-Pugs-l.jpg"></img></div>
    <div><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/doug-the-pug-1516375006.jpg?crop=0.984xw:0.722xh;0,0.264xh&resize=1200:*"></img></div>
   
  </Carousel>
 
  


      </div>
      
    );
  }
}

export default App;
