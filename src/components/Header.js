import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Contacto
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Servicios
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Preferencias</span>}>
          <MenuItemGroup title="Sesión">
            <Menu.Item key="setting:1">Ir a cuenta</Menu.Item>
            <Menu.Item key="setting:2">Cerrar sesión</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Perfil">
            <Menu.Item key="setting:3">Editar</Menu.Item>
            <Menu.Item key="setting:4">Borrar</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

// const Header = () => (

//   <Menu>
//         <Menu.Item key="mail">
//           <Icon type="mail" />Mail
//         </Menu.Item>
//         <Menu.Item key="app" disabled>
//           <Icon type="appstore" />Apps
//         </Menu.Item>
//         <Menu.Item key="settings" disabled>
//           <Icon type="setting" />Settings
//         </Menu.Item>
//       </Menu>
// )

export default Header