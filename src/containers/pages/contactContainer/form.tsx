import React from 'react';
import { useForm } from 'react-hook-form';
import { PostData } from 'store/pages/contact/reducers';
import { useContactActions, useContactState } from 'hooks/store/useContact';

const FormContainer: React.FC = () => {
  const { setPostData } = useContactActions();
  const contactState = useContactState();
  const { name, email, message } = contactState;
  const { register, handleSubmit, errors } = useForm<PostData>({
    defaultValues: {
      name,
      email,
      message,
    },
  });
  const onSubmit = data => {
    setPostData(data);
  };

  // 適当なスタイル
  const dummyStyle = { display: 'block', border: 'solid 1px #333' };
  const dummyErrorStyle = { fontSize: '10px', color: 'red' };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" style={{ display: 'block' }}>
        お名前
      </label>
      <input
        name="name"
        placeholder="大阪太郎"
        ref={register({ required: '必須項目です。' })}
        style={dummyStyle}
      />
      {errors.name && <div style={dummyErrorStyle}>{errors.name.message}</div>}

      <label htmlFor="email" style={{ display: 'block' }}>
        メールアドレス
      </label>
      <input
        name="email"
        placeholder="mail@example.com"
        ref={register({
          required: '必須項目です。',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: '正しいメールアドレスではありません。',
          },
        })}
        style={dummyStyle}
      />
      {errors.email && (
        <div style={dummyErrorStyle}>{errors.email.message}</div>
      )}

      <label htmlFor="message" style={{ display: 'block' }}>
        お問い合わせ内容
      </label>
      <textarea
        name="message"
        placeholder="内容"
        ref={register({ required: '必須項目です。' })}
        style={dummyStyle}
      />
      {errors.message && (
        <div style={dummyErrorStyle}>{errors.message.message}</div>
      )}

      <button type="submit" style={dummyStyle}>
        送信内容の確認
      </button>
    </form>
  );
};

export default FormContainer;