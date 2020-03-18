import { PostData } from './reducers';

export const SET_POST_DATA = 'SET_POST_DATA';
export const EDIT_POST_DATA = 'EDIT_POST_DATA';
export const REQUEST_POST = 'REQUEST_POST';
export const REQUEST_POST_SUCCESS = 'REQUEST_POST_SUCCESS';
export const REQUEST_POST_FAILURE = 'REQUEST_POST_FAILURE';
export const CONTACT_COMPLETE = 'CONTACT_COMPLETE';

// Actions
export type SendPostData = {
  type: typeof SET_POST_DATA;
  postData: PostData;
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
