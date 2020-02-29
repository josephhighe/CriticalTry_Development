import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './table.css';
import Canvas from './canvas';
import Table from './table';

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
          <Table />
          <Canvas />
        </div>
      </Fragment>
    );
  }
}

export default App;
