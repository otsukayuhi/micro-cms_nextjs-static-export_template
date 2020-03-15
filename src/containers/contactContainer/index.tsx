import React from 'react';
import { useSelector } from 'react-redux';
import FromContainer from './form';
import ConfirmContainer from './confirm';

const CountContainer: React.FC = () => {
  const postData = useSelector(state => state.contact);
  const { setPostData, isLoading, status } = postData;

  const content = setPostData ? <ConfirmContainer /> : <FromContainer />;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {status === 'failure' && <div>送信失敗</div>}
      {content}
    </>
  );
};

export default CountContainer;
