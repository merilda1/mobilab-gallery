import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Gallery from './components/Gallery';
import store from './store';
import Menu from './components/Menu';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Menu />
      <div className="container">
        <Gallery
          title="Gallery"
        />
      </div>
    </div>
  </Provider>
);

export default App;
