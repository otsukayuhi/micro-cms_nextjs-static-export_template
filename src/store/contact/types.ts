import {
  SET_POST_DATA,
  EDIT_POST_DATA,
  REQUEST_POST,
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAILURE,
  CONTACT_COMPLETE,
} from './actions';
import { ContactStatus } from './reducers';

// Actions
export type SendPostData = {
  type: typeof SET_POST_DATA;
  data: any;
};

export type EditPostData = {
  type: typeof EDIT_POST_DATA;
};

export type RequestPosts = {
  type: typeof REQUEST_POST;
};

export type RequestPostsSuccess = {
  type: typeof REQUEST_POST_SUCCESS;
};

export type RequestPostFailure = {
  type: typeof REQUEST_POST_FAILURE;
};

export type CompleteContact = {
  type: typeof CONTACT_COMPLETE;
};

export type ContactActions = SendPostData &
  EditPostData &
  RequestPosts &
  RequestPostsSuccess &
  RequestPostFailure &
  CompleteContact;

// reducers
export type PostData = {
  name: string;
  email: string;
  message: string;
};

export type InitialContactState = {
  setPostData: boolean;
  isLoading: boolean;
  status: ContactStatus;
  isComplete: boolean;
} & PostData;
