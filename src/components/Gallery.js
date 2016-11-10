import React, { PropTypes } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Picture from './Picture';

const Gallery = props => (
  <Grid>
    <h1>{props.title}</h1>
    <Row>
      <Picture
        title="My first image"
        url="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"
        description="One placeholder image"
      />
    </Row>
  </Grid>
);

Gallery.propTypes = {
  title: PropTypes.string,
};

export default Gallery;
