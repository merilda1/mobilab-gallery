import React, { PropTypes } from 'react';

const getImageSrc = (picture, thumbnail) => {
  let src;
  if (picture.type === 'image/gif') {
    src = picture.link;
  } else {
    let id;
    const format = thumbnail ? 'b' : '';
    if (picture.is_album) {
      id = picture.cover;
    } else {
      id = picture.id;
    }
    src = `http://i.imgur.com/${id}${format}.png`;
  }
  return src;
};

const Picture = props => (
  <div className="card">
    <img
      className="card-img-top"
      src={getImageSrc(props.picture, props.thumbnail)}
      alt={props.title}
      width="100%"
    />
    <h4 className="card-title">{props.description}</h4>
  </div>
);

Picture.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    is_album: PropTypes.bool,
    cover: PropTypes.string,
  }),
  thumbnail: PropTypes.bool,
  description: PropTypes.string,
};

export default Picture;
