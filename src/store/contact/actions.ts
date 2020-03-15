import { postContact } from 'gateways/postContact';

export const SET_POST_DATA = 'SET_POST_DATA';
export const EDIT_POST_DATA = 'EDIT_POST_DATA';
export const REQUEST_POST = 'REQUEST_POST';
export const REQUEST_POST_SUCCESS = 'REQUEST_POST_SUCCESS';
export const REQUEST_POST_FAILURE = 'REQUEST_POST_FAILURE';
export const CONTACT_COMPLETE = 'CONTACT_COMPLETE';

export const setPostData = data => ({
  type: SET_POST_DATA,
  data,
});

export const editPostData = () => ({
  type: EDIT_POST_DATA,
});

export const requestPosts = () => ({
  type: REQUEST_POST,
});

export const requestPostsSuccess = () => ({
  type: REQUEST_POST_SUCCESS,
});

export const requestPostFailure = () => ({
  type: REQUEST_POST_FAILURE,
});

export const completeContact = () => ({
  type: CONTACT_COMPLETE,
});

export const fetchPost = contactData => {
  return async dispatch => {
    dispatch(requestPosts());
    try {
      await postContact(contactData);
      dispatch(requestPostsSuccess());
    } catch (error) {
      dispatch(requestPostFailure());
    }
  };
};
