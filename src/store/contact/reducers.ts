import {
  SET_POST_DATA,
  EDIT_POST_DATA,
  REQUEST_POST,
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAILURE,
  CONTACT_CLEAR,
  ContactActions,
} from './actions';

export type PostData = {
  name: string;
  email: string;
  message: string;
};

export const contactStatus = {
  noFetch: 'no_fetch',
  success: 'success',
  failure: 'failure',
} as const;

export type ContactStatus = typeof contactStatus[keyof typeof contactStatus];

export type InitialContactState = {
  setPostData: boolean;
  isLoading: boolean;
  status: ContactStatus;
} & PostData;

const initialContactState: InitialContactState = {
  name: '',
  email: '',
  message: '',
  setPostData: false,
  isLoading: false,
  status: contactStatus.noFetch,
};

export const contactReducer = (
  state = initialContactState,
  action: ContactActions,
): InitialContactState => {
  switch (action.type) {
    case SET_POST_DATA:
      return {
        ...state,
        ...action.postData,
        setPostData: true,
      };
    case EDIT_POST_DATA:
      return {
        ...state,
        setPostData: false,
        status: contactStatus.noFetch,
      };
    case REQUEST_POST:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: contactStatus.success,
      };
    case REQUEST_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        status: contactStatus.failure,
      };
    case CONTACT_CLEAR:
      return {
        ...initialContactState,
      };
    default:
      return state;
  }
};
