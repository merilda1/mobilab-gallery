import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import Picture from './Picture';

const Gallery = props => (
  <Grid>
    <h1>{props.title}</h1>
    <Row>
      {props.pictures.map((picture, i) =>
        <Picture
          title={picture.title}
          url={picture.is_album ? `http://i.imgur.com/${picture.cover}.png` : picture.link}
          description={picture.title}
          key={i}
        />
      )}
    </Row>
  </Grid>
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
