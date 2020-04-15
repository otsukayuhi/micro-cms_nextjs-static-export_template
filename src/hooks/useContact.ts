import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import {
  SET_POST_DATA,
  EDIT_POST_DATA,
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAILURE,
  CONTACT_CLEAR,
  REQUEST_POST,
  SendPostData,
  EditPostData,
  RequestPosts,
  RequestPostsSuccess,
  RequestPostFailure,
  ContactClear,
} from 'store/contact/actions';
import { PostData, InitialContactState } from 'store/contact/reducers';
import { postContact } from 'gateways/postContact';

export const useContactActions = () => {
  const dispatch = useDispatch();

  // Action Creators

  /**
   * Storeにお問い合わせフォームの各項目をセット
   * @param postData お問い合わせフォームの各項目
   */
  const setPostData = (postData: PostData): SendPostData =>
    dispatch({
      type: SET_POST_DATA,
      postData,
    });

  /**
   * お問い合わせフォームの再編集
   */
  const editPostData = (): EditPostData =>
    dispatch({
      type: EDIT_POST_DATA,
    });

  /**
   * お問い合わせのPOSTをリクエストし、ローディング状態に変更
   */
  const requestPosts = (): RequestPosts =>
    dispatch({
      type: REQUEST_POST,
    });

  /**
   * お問い合わせのPOSTリクエスト成功
   */
  const requestPostsSuccess = (): RequestPostsSuccess =>
    dispatch({
      type: REQUEST_POST_SUCCESS,
    });

  /**
   * お問い合わせのPOSTリクエスト失敗
   * ローディング状態の解除
   */
  const requestPostFailure = (): RequestPostFailure =>
    dispatch({
      type: REQUEST_POST_FAILURE,
    });

  /**
   * お問い合わせ完了
   * ローディング状態の解除
   */
  const contactClear = (): ContactClear =>
    dispatch({
      type: CONTACT_CLEAR,
    });

  /**
   * お問い合わせ POST時の非同期処理
   */
  const fetchPost = useCallback(
    async contentState => {
      requestPosts();
      try {
        await postContact(contentState);
        requestPostsSuccess();
      } catch (error) {
        requestPostFailure();
      }
    },
    // dispatchの変更のみを検知
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch],
  );

  return {
    setPostData,
    editPostData,
    requestPosts,
    requestPostsSuccess,
    requestPostFailure,
    contactClear,
    fetchPost,
  };
};

export const useContactState = () => {
  const selectIsOn = (state: RootState) => state.contact;
  const contactState: InitialContactState = useSelector(selectIsOn);
  return contactState;
};
