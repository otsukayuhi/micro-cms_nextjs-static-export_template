import { ContactActions, InitialContactState } from './types';
import {
  SET_POST_DATA,
  EDIT_POST_DATA,
  REQUEST_POST,
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAILURE,
  CONTACT_COMPLETE,
} from './actions';

export enum ContactStatus {
  noFetch = 'no_fetch',
  success = 'success',
  failure = 'failure',
}

const initialContactState: InitialContactState = {
  name: '',
  email: '',
  message: '',
  setPostData: false,
  isLoading: false,
  status: ContactStatus.noFetch,
  isComplete: false,
};

export const contactReducer = (
  state = initialContactState,
  action: ContactActions,
): InitialContactState => {
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
        setPostData: false,
        status: ContactStatus.noFetch,
      };
    case REQUEST_POST:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_POST_SUCCESS:
      return {
        ...state,
        status: ContactStatus.success,
      };
    case REQUEST_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        status: ContactStatus.failure,
      };
    case CONTACT_COMPLETE:
      return {
        ...initialContactState,
        isComplete: true,
      };
    default:
      return state;
  }
};
