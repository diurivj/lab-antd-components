import React, { Component } from 'react';
import { Drawer, Button, Radio } from 'antd';
class DrawerCustom extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showDrawer}>
                    More Information
                </Button>
                <Drawer
                    title="Miguel Gomez Information"
                    placement="bottom"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p><a href="https://www.linkedin.com/in/j-miguel-gomez-melendez/">Linked In</a></p>
                    <p><a href="https://github.com/AsterDecember">Git Hub</a></p>
                </Drawer>
            </div>
        );
    }
}

export default DrawerCustom