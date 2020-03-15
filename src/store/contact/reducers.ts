import {
  SET_POST_DATA,
  EDIT_POST_DATA,
  REQUEST_POST,
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAILURE,
  CONTACT_COMPLETE,
} from './actions';

type InitialState = {
  name: string;
  email: string;
  message: string;
  setPostData: boolean;
  isLoading: boolean;
  status: 'no_fetch' | 'success' | 'failure';
  isComplete: boolean;
};

const initialState: InitialState = {
  name: '',
  email: '',
  message: '',
  setPostData: false,
  isLoading: false,
  status: 'no_fetch',
  isComplete: false,
};

export const contactReducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case SET_POST_DATA:
      return {
        ...state,
        ...action.data,
        setPostData: true,
        isComplete: true,
      };
    case EDIT_POST_DATA:
      return {
        ...state,
        ...action.data,
        setPostData: false,
        status: 'no_fetch',
      };
    case REQUEST_POST:
      return {
        ...state,
        ...action.data,
        isLoading: true,
      };
    case REQUEST_POST_SUCCESS:
      return {
        ...state,
        ...action.data,
        isLoading: false,
        status: 'success',
      };
    case REQUEST_POST_FAILURE:
      return {
        ...state,
        ...action.data,
        isLoading: false,
        status: 'failure',
      };
    case CONTACT_COMPLETE:
      return {
        ...initialState,
        isComplete: true,
      };
    default:
      return state;
  }
};
