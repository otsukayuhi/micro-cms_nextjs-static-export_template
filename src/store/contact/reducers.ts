import { POST_DATA, CONTACT } from './actions';

const initialPostData = {
  name: '',
  email: '',
  message: '',
  status: 0,
};

export const contactReducer = (state = initialPostData, action) => {
  switch (action.type) {
    case POST_DATA:
      return action.contact;
    case CONTACT:
      return POST_DATA;
    default:
      return state;
  }
};
