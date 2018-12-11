import React from "react";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="user">
          <Icon type="user" />
          Alexander McQueen
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              World of McQueen
            </span>
          }
        >
          <MenuItemGroup title="About McQueen">
            <Menu.Item key="setting:1">History</Menu.Item>
            <Menu.Item key="setting:2">Cerrar sesión</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Fashion Shows">
            <Menu.Item key="setting:3">Paris Fashion Week</Menu.Item>
            <Menu.Item key="setting:4">NY Fashion Week</Menu.Item>
            <Menu.Item key="setting:4">London Fashion Week</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://www.alexandermcqueen.com/mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexander McQueen Site
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
