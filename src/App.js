import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Mobilab Gallery</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#hot">Hot</NavItem>
          <NavItem eventKey={2} href="#top">Top</NavItem>
          <NavItem eventKey={2} href="#user">User</NavItem>
        </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
