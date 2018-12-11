import React, { Component } from 'react';
import { Button } from 'antd';

class CoolButton extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  render() {
    return (
      <span>
        <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
      </span>
    );
  }
}

export default CoolButton