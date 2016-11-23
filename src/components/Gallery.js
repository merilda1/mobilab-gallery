import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Picture from './Picture';
import Actions from './../store/Actions';

const Gallery = props => (
  <div>
    <h1>{props.title}</h1>
    <div>
      <form className="well form-horizontal">
        <fieldset>
          <legend>Options</legend>
          <div className="form-group">
            <label htmlhtmlFor="viral-video" className="col-lg-2 control-label">Display Viral Video</label>
            <div className="col-lg-10">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="viral-video"
                  checked={props.viral}
                  className="checkbox"
                  onChange={() => {
                    const reverseViral = !props.viral;
                    props.setViralDisplay(reverseViral);
                    props.reloadGallery(props.type, reverseViral);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="select" className="col-lg-2 control-label">Sort By</label>
            <div className="col-lg-10">
              <select className="form-control" id="select">
                <option>viral</option>
                <option>top</option>
                <option>time</option>
                <option>rising</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    <div className="card-columns">
      {props.pictures.map((picture, i) =>
        <Picture
          title={picture.title}
          picture={picture}
          description={picture.title}
          thumbnail
          key={i}
        />,
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  title: state.gallery.title,
  pictures: state.gallery.pictures,
  viral: state.gallery.viral,
  type: state.gallery.type,
});

const mapDispatchToProps = dispatch => ({
  setViralDisplay: (viral) => {
    dispatch(Actions.setViralDisplay(viral));
  },
  reloadGallery: (type, viral) => {
    dispatch(Actions.fetchGallery(type, 0, viral));
  },
});


Gallery.propTypes = {
  title: PropTypes.string,
  viral: PropTypes.bool,
  type: PropTypes.oneOf(['HOT', 'TOP', 'USER']),
  pictures: PropTypes.arrayOf(React.PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    is_album: PropTypes.bool,
    cover: PropTypes.string,
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
