import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>{true ? 'Hello World !' : 'Jason'}</li>
        <li>Macbook pro 16</li>
      </ul>

      // <div>
      //     Hello World!!!!!
      // </div>
    );
  }
}

export default App;
