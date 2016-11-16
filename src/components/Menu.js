import React, { PropTypes } from 'react';

const Menu = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a href="#home" className="navbar-brand">Mobilab Gallery</a>
        </div>
        <ul className="nav navbar-nav">
          <li role="presentation" className=""><a href="#hot">Hot</a></li>
          <li role="presentation" className=""><a href="#top">Top</a></li>
          <li role="presentation" className=""><a href="#user">User</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

Menu.propTypes = {
};

export default Menu;
