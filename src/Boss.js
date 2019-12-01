import React, { Component } from 'react';

class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
    this.clickButton = this.clickButton.bind(this);
  }

  render() {
    return (
      <div>
        <div className={this.state.isShow ? 'show' : 'hiden'}>
          Big boss - zhe
        </div>
        <div>
          <button onClick={this.clickButton}>Click to change</button>
        </div>
      </div>
    );
  }

  clickButton() {
    this.setState({
      isShow: !this.state.isShow
      //   isShow: this.isShow?false:true
    });
  }
}

export default Boss;
