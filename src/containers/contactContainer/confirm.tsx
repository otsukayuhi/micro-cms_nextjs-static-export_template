import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { fetchPost, editPostData } from 'store/contact/actions';
import { InitialContactState } from 'store/contact/types';

const ConfirmContainer: React.FC = () => {
  const dispatch = useDispatch();
  const selectIsOn = (state: RootState) => state.contact;
  const contactState: InitialContactState = useSelector(selectIsOn);

  const { name, email, message } = contactState;
  const onSubmit = () => dispatch(fetchPost(contactState));
  const editPost = () => dispatch(editPostData());

  // 適当なスタイル
  const dummyStyle = {
    display: 'block',
    width: '100px',
    border: 'solid 1px #333',
  };

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
      <button onClick={onSubmit} style={dummyStyle}>
        送信する
      </button>
      <button onClick={editPost} style={dummyStyle}>
        編集する
      </button>
    </>
  );
};

export default ConfirmContainer;
