import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ContactStatus } from 'store/pages/contact/reducers';
import { useContactActions, useContactState } from 'hooks/store/useContact';
import FromContainer from './form';
import ConfirmContainer from './confirm';

const CountContainer: React.FC = () => {
  const router = useRouter();
  const { completeContact } = useContactActions();
  const contactState = useContactState();

  const { setPostData, isLoading, status } = contactState;
  const content = setPostData ? <ConfirmContainer /> : <FromContainer />;
  const completeUrl = '/contact/complete';

  useEffect(() => {
    if (status === ContactStatus.success) {
      completeContact();
      router.push(completeUrl);
    }
    // statusのみを検知
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {status === ContactStatus.failure && <div>送信失敗</div>}
      {content}
    </>
  );
};

export default CountContainer;
