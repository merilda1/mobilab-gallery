import { createActions } from 'reduxsauce';

const { Creators } = createActions({
  picturesLoaded: ['galleryType', 'pictures', 'page', 'user'],
});

export default Creators;
