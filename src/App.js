import React from 'react';
import { Provider } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import Gallery from './components/Gallery';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Mobilab Gallery</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#hot">Hot</NavItem>
          <NavItem eventKey={2} href="#top">Top</NavItem>
          <NavItem eventKey={2} href="#user">User</NavItem>
        </Nav>
      </Navbar>
      <Gallery
        title="Gallery"
      />
    </div>
  </Provider>
);

export default App;
