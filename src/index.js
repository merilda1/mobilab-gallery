import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Gallery from './components/Gallery';
import Picture from './components/Picture';
import './styles/index.css';
import './styles/theme.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Gallery} />
      <Route path="picture/:id" component={Picture} />
      <Route path="*" component={Gallery} />
    </Route>
  </Router>,
  document.getElementById('root')
);

