import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactAction } from 'store/contact/actions';

const CountContainer: React.FC = () => {
  const data = useSelector(state => state.contact);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="なんしか太郎"
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="taro@example.com"
        />
      </div>
      <div>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="メッセージをどうぞ"
        />
      </div>
      <div>{data.status}</div>
      <input
        type="button"
        onClick={() =>
          dispatch(
            contactAction({
              name,
              email,
              message,
            }),
          )
        }
        value={'お問い合わせ送信'}
      />
    </>
  );
};

export default CountContainer;
