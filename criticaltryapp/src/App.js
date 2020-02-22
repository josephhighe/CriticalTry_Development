import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './canvas';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h3 style={{ textAlign: 'center' }}>PAINT</h3>
        <div className="main">
          <div className="color-guide">
            <h5>COLOR GUIDE</h5>
            <div className="user user">User</div>
            <div className="user guest">Guest</div>
          </div>
          <Canvas />
        </div>
      </Fragment>
    );
  }
}

export default App;
