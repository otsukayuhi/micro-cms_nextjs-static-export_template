import React from 'react';
import { useContactActions, useContactState } from 'hooks/store/useContact';

const ConfirmContainer: React.FC = () => {
  const { fetchPost, editPostData } = useContactActions();
  const contactState = useContactState();
  const { name, email, message } = contactState;
  const onSubmit = () => fetchPost(contactState);
  const editPost = () => editPostData();

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
