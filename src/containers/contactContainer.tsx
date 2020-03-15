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
      <div>
        <div>お名前</div>
        <input
          type="text"
          name="name"
          placeholder="お名前"
          ref={register({ required: true })}
        />
        {errors.name && <div>お名前は必須です。</div>}
      </div>

      <div>
        <div>メールアドレス</div>
        <input
          type="email"
          name="email"
          placeholder="mail@example.com"
          ref={register({ required: true })}
        />
        {errors.email && <div>メールアドレスは必須です</div>}
      </div>

      <div>
        <div>お問い合わせ内容</div>
        <textarea
          name="message"
          placeholder="hoge"
          ref={register({ required: true })}
        />
        {errors.message && <div>お問い合わせ内容は必須です</div>}
      </div>

      <button type="submit">お問い合わせ送信</button>
    </form>
  );
};

export default CountContainer;
