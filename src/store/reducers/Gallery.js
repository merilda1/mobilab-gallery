import { createReducer } from 'reduxsauce';
import { Types } from './../Actions';

const INITIAL_STATE = {
  title: 'Image Gallery',
  pictures: [],
  page: 0,
  type: 'HOT',
  viral: true,
  sort: 'viral',
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

export const changeGalleryType = (state = INITIAL_STATE, action) =>
  ({ ...state, type: action.galleryType });

export const setViralDisplay = (state = INITIAL_STATE, action) =>
  ({ ...state, viral: action.viral });

export const setSort = (state = INITIAL_STATE, action) =>
  ({ ...state, sort: action.sort });

export const HANDLERS = {
  [Types.RECEIVE_GALLERY]: receiveGallery,
  [Types.CHANGE_GALLERY_TYPE]: changeGalleryType,
  [Types.SET_VIRAL_DISPLAY]: setViralDisplay,
  [Types.SET_SORT]: setSort,
};

export default createReducer(INITIAL_STATE, HANDLERS);
