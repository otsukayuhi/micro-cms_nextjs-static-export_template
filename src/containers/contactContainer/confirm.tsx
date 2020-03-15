import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPost,
  editPostData,
  completeContact,
} from 'store/contact/actions';

const ConfirmContainer: React.FC = () => {
  const postData = useSelector(state => state.contact);
  const dispatch = useDispatch();
  const router = useRouter();

  const { name, email, message, status } = postData;
  const onSubmit = () => dispatch(fetchPost(postData));
  const editPost = () => dispatch(editPostData());

  useEffect(() => {
    if (status === 'success') {
      dispatch(completeContact());
      router.push('/contact/complete');
    }
  }, [dispatch, router, status]);

  return (
    <>
      <Head>
        <title>お問い合わせ | 確認</title>
        <meta name="description" content="お問い合わせ | 確認" />
      </Head>
      <div>
        <h1>お問い合わせ | 確認</h1>
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
        <button onClick={onSubmit}>送信する</button>
        <button onClick={editPost}>編集する</button>
      </div>
    </>
  );
};

export default ConfirmContainer;
