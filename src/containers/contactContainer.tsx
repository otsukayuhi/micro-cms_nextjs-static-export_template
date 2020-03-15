import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { contactAction } from 'store/contact/actions';

const CountContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => dispatch(contactAction(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" style={{ display: 'block' }}>
        お名前
      </label>
      <input
        type="text"
        name="name"
        placeholder="静岡太郎"
        ref={register({ required: true })}
        style={{ display: 'block' }}
      />
      {errors.name && (
        <div style={{ fontSize: '10px', color: 'red' }}>お名前は必須です。</div>
      )}

      <label htmlFor="email" style={{ display: 'block' }}>
        メールアドレス
      </label>
      <input
        type="email"
        name="email"
        placeholder="mail@example.com"
        ref={register({ required: true })}
        style={{ display: 'block' }}
      />
      {errors.email && (
        <div style={{ fontSize: '10px', color: 'red' }}>
          メールアドレスは必須です
        </div>
      )}

      <label htmlFor="message" style={{ display: 'block' }}>
        お問い合わせ内容
      </label>
      <textarea
        name="message"
        placeholder="内容"
        ref={register({ required: true })}
        style={{ display: 'block' }}
      />
      {errors.message && (
        <div style={{ fontSize: '10px', color: 'red' }}>
          お問い合わせ内容は必須です
        </div>
      )}

      <button type="submit" style={{ display: 'block' }}>
        送信
      </button>
    </form>
  );
};

export default CountContainer;
