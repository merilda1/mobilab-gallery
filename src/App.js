import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Gallery from './components/Gallery';
import store from './store';
import Menu from './components/Menu';

const App = ({ children }) => (
  <Provider store={store}>
    <div className="App">
      <Menu />
      <div className="container">
        {children}
      </div>
    </div>
  </Provider>
);

App.propsType = {
  children: React.PropTypes.node,
};

export default App;
