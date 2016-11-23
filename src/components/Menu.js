import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from './../store/Actions';

const Menu = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a href="#home" className="navbar-brand">Mobilab Gallery</a>
        </div>
        <ul className="nav navbar-nav">
          <li role="presentation" className={props.galleryType === 'HOT' ? 'active' : null}><a href="#hot" onClick={() => props.changeGalleryType('HOT', props.viral)}>Hot</a></li>
          <li role="presentation" className={props.galleryType === 'TOP' ? 'active' : null}><a href="#top" onClick={() => props.changeGalleryType('TOP', props.viral)}>Top</a></li>
          <li role="presentation" className={props.galleryType === 'USER' ? 'active' : null}><a href="#user" onClick={() => props.changeGalleryType('USER', props.viral)}>User</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

Menu.propTypes = {
  galleryType: PropTypes.oneOf(['HOT', 'TOP', 'USER']),
  changeGalleryType: PropTypes.func,
  viral: PropTypes.bool,
};

const mapStateToProps = state => ({
  galleryType: state.gallery.type,
  viral: state.gallery.viral,
});

const mapDispatchToProps = dispatch => ({
  changeGalleryType: (type, viral) => {
    dispatch(Actions.changeGalleryType(type));
    dispatch(Actions.fetchGallery(type, 0, viral));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
