const title = (state = '', action) => {
  switch (action.type) {
    case 'SET_HOT':
      return 'Hot Images Gallery';
    case 'SET_TOP':
      return 'Top Images Gallery';
    case 'SET_USER':
      return 'User Images Gallery';
    default:
      return state;
  }
};

export default title;
