import { createActions } from 'reduxsauce';
import fetch from 'isomorphic-fetch';

export const { Types, Creators } = createActions({
  receiveGallery: ['galleryType', 'pictures', 'page', 'user'],
  changeGalleryType: ['galleryType'],
  requestGallery: ['galleryType', 'page', 'user'],
  setViralDisplay: ['viral'],
  fetchGallery: (galleryType, page, user) => (dispatch) => {
    const type = galleryType.toLowerCase();
    return fetch(`https://api.imgur.com/3/gallery/${type}`, {
      headers: {
        Authorization: 'Client-ID 1ef0a5c1563efb4',
      },
    })
    .then(response => response.json())
    .then(data => dispatch(Creators.receiveGallery(galleryType, data.data, page, user)));
  },
});

export default Creators;
