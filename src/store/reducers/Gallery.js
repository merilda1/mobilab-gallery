import { createReducer } from 'reduxsauce';
import { Types } from './../Actions';

const INITIAL_STATE = {
  title: 'Image Gallery',
  pictures: [],
  page: 0,
  user: null,
};

export const receiveGallery = (state = INITIAL_STATE, action) => {
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
  [Types.RECEIVE_GALLERY]: receiveGallery,
};

export default createReducer(INITIAL_STATE, HANDLERS);