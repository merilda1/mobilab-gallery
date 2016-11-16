import { createReducer } from 'reduxsauce';
import Types from './../Types';
// CLient ID: 1ef0a5c1563efb4
// Client secret: c9ae6255a54fa02e688a7f4e50e1e51ed012654a

const INITIAL_STATE = {
  title: 'Image Gallery',
  pictures: [],
  page: 0,
  user: null,
};

export const picturesLoaded = (state = INITIAL_STATE, action) => {
  let title;
  switch (action.galleryType) {
    case 'HOT':
      title = 'Hot Images Gallery';
      break;
    case 'TOP':
      title = 'Top Images Gallery';
      break;
    case 'USER':
      title = 'User Images Gallery';
      break;
    default:
      title = INITIAL_STATE.title;
      break;
  }
  return { ...state, pictures: action.pictures, title };
};

export const HANDLERS = {
  [Types.PICTURES_LOADED]: picturesLoaded,
};

export default createReducer(INITIAL_STATE, HANDLERS);
