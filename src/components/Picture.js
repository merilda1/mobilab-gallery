import React, { PropTypes } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

const Picture = props => (
  <Col xs={6} md={4}>
    <Thumbnail src={props.url} alt={props.title}>
      <p>{props.description}</p>
    </Thumbnail>
  </Col>
);

Picture.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
};

export default Picture;
