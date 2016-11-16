import React, { PropTypes } from 'react';

const Picture = props => (
  <div className="card">
    <img className="card-img-top" width="100%" src={props.url} alt={props.title} />
    <h4 className="card-title">{props.description}</h4>
  </div>
);

Picture.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
};

export default Picture;
