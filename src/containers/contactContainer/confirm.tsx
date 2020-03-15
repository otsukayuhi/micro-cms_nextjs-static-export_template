import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { fetchPost, editPostData } from 'store/contact/actions';

const ConfirmContainer: React.FC = () => {
  const dispatch = useDispatch();
  const selectIsOn = (state: RootState) => state.contact;
  const contactState = useSelector(selectIsOn);

  const { name, email, message } = contactState;
  const onSubmit = () => dispatch(fetchPost(contactState));
  const editPost = () => dispatch(editPostData());

  return (
    <>
      <h1>お問い合わせ内容の確認</h1>
      <dl>
        <dt>お名前</dt>
        <dd>{name}</dd>
      </dl>
      <dl>
        <dt>メールアドレス</dt>
        <dd>{email}</dd>
      </dl>
      <dl>
        <dt>お問い合わせ内容</dt>
        <dd>{message}</dd>
      </dl>
      <button
        onClick={onSubmit}
        style={{ display: 'block', width: '100px', border: 'solid 1px #333' }}
      >
        送信する
      </button>
      <button
        onClick={editPost}
        style={{ display: 'block', width: '100px', border: 'solid 1px #333' }}
      >
        編集する
      </button>
    </>
  );
};

export default ConfirmContainer;
