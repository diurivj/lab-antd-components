import React from 'react'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

var state = {
    current: 'mail',
  }

const handleClick = (e) => {
    console.log('click ', e);
    state = {
      current: e.key,
    };
  }

const Men = () =>(
    
    <Menu
        onClick={handleClick}
        selectedKeys={[state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Registrate
        </Menu.Item>
        <Menu.Item key="app" >
          <Icon type="appstore" />Navega
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Ajustes</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Home</a>
        </Menu.Item>
      </Menu>
)


export default Men;