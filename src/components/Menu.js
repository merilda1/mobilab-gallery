import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Menu = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a href="#home" className="navbar-brand">Mobilab Gallery</a>
        </div>
        <ul className="nav navbar-nav">
          <li role="presentation" className={props.galleryType === 'HOT' ? 'active' : null}><a href="#hot">Hot</a></li>
          <li role="presentation" className={props.galleryType === 'TOP' ? 'active' : null}><a href="#top">Top</a></li>
          <li role="presentation" className={props.galleryType === 'USER' ? 'active' : null}><a href="#user">User</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

Menu.propTypes = {
  galleryType: PropTypes.oneOf('HOT', 'TOP', 'USER'),
};

const mapStateToProps = state => ({
  galleryType: state.gallery.type,
});

export default connect(mapStateToProps)(Menu);
