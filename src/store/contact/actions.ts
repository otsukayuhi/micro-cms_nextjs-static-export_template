import { postContact } from 'gateways/postContact';
import {
  SendPostData,
  EditPostData,
  RequestPosts,
  RequestPostsSuccess,
  RequestPostFailure,
  CompleteContact,
  PostData,
  InitialContactState,
} from './types';

export const SET_POST_DATA = 'SET_POST_DATA';
export const EDIT_POST_DATA = 'EDIT_POST_DATA';
export const REQUEST_POST = 'REQUEST_POST';
export const REQUEST_POST_SUCCESS = 'REQUEST_POST_SUCCESS';
export const REQUEST_POST_FAILURE = 'REQUEST_POST_FAILURE';
export const CONTACT_COMPLETE = 'CONTACT_COMPLETE';

export const setPostData = (data: PostData): SendPostData => ({
  type: 'SET_POST_DATA',
  data,
});

export const editPostData = (): EditPostData => ({
  type: EDIT_POST_DATA,
});

export const requestPosts = (): RequestPosts => ({
  type: REQUEST_POST,
});

export const requestPostsSuccess = (): RequestPostsSuccess => ({
  type: REQUEST_POST_SUCCESS,
});

export const requestPostFailure = (): RequestPostFailure => ({
  type: REQUEST_POST_FAILURE,
});

export const completeContact = (): CompleteContact => ({
  type: CONTACT_COMPLETE,
});

export const fetchPost = (contentState: InitialContactState) => {
  return async dispatch => {
    dispatch(requestPosts());
    try {
      await postContact(contentState);
      dispatch(requestPostsSuccess());
    } catch (error) {
      dispatch(requestPostFailure());
    }
  };
};
