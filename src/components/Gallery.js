import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Picture from './Picture';

const Gallery = props => (
  <div>
    <h1>{props.title}</h1>
    <div className="card-columns">
      {props.pictures.map((picture, i) =>
        <Picture
          title={picture.title}
          url={picture.is_album ? `http://i.imgur.com/${picture.cover}.png` : picture.link}
          description={picture.title}
          key={i}
        />
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  title: state.gallery.title,
  pictures: state.gallery.pictures,
});

Gallery.propTypes = {
  title: PropTypes.string,
  pictures: PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    link: React.PropTypes.string,
  })),
};

export default connect(mapStateToProps)(Gallery);
