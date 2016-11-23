import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Picture from './Picture';
import Actions from './../store/Actions';

const Gallery = props => (
  <div>
    <h1>{props.title}</h1>
    <div>
      <input
        type="checkbox"
        id="viral-video"
        checked={props.viral}
        onChange={() => { props.setViralDisplay(!props.viral); }}
      />
      <label htmlFor="viral-video">&nbsp;Display Viral Video</label>
    </div>
    <div className="card-columns">
      {props.pictures.map((picture, i) =>
        <Picture
          title={picture.title}
          picture={picture}
          description={picture.title}
          thumbnail
          key={i}
        />
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  title: state.gallery.title,
  pictures: state.gallery.pictures,
  viral: state.gallery.viral,
});

const mapDispatchToProps = (dispatch, props) => ({
  setViralDisplay: (viral) => {
    dispatch(Actions.setViralDisplay(viral));
  },
});


Gallery.propTypes = {
  title: PropTypes.string,
  viral: PropTypes.bool,
  pictures: PropTypes.arrayOf(React.PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    is_album: PropTypes.bool,
    cover: PropTypes.string,
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
