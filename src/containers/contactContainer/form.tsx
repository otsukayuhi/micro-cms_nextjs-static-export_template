import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState } from 'store';
import { setPostData } from 'store/contact/actions';
import { PostData } from 'store/contact/types';

const FormContainer: React.FC = () => {
  const dispatch = useDispatch();
  const selectIsOn = (state: RootState) => state.contact;
  const contactState = useSelector(selectIsOn);
  const { name, email, message } = contactState;
  const { register, handleSubmit, errors } = useForm<PostData>({
    defaultValues: {
      name,
      email,
      message,
    },
  });
  const onSubmit = data => dispatch(setPostData(data));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" style={{ display: 'block' }}>
          お名前
        </label>
        <input
          name="name"
          placeholder="大阪太郎"
          ref={register({ required: '必須項目です。' })}
          style={{ display: 'block', border: 'solid 1px #333' }}
        />
        {errors.name && (
          <div style={{ fontSize: '10px', color: 'red' }}>
            {errors.name.message}
          </div>
        )}

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
          style={{ display: 'block', border: 'solid 1px #333' }}
        />
        {errors.email && (
          <div style={{ fontSize: '10px', color: 'red' }}>
            {errors.email.message}
          </div>
        )}

        <label htmlFor="message" style={{ display: 'block' }}>
          お問い合わせ内容
        </label>
        <textarea
          name="message"
          placeholder="内容"
          ref={register({ required: '必須項目です。' })}
          style={{ display: 'block', border: 'solid 1px #333' }}
        />
        {errors.message && (
          <div style={{ fontSize: '10px', color: 'red' }}>
            {errors.message.message}
          </div>
        )}

        <button
          type="submit"
          style={{ display: 'block', border: 'solid 1px #333' }}
        >
          送信内容の確認
        </button>
      </form>
    </>
  );
};

export default FormContainer;
