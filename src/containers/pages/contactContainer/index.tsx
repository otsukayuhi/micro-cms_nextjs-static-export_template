import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { ContactStatus } from 'store/pages/contact/reducers';
import { completeContact } from 'store/pages/contact/actions';
import { InitialContactState } from 'store/pages/contact/types';
import FromContainer from './form';
import ConfirmContainer from './confirm';

const CountContainer: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectIsOn = (state: RootState) => state.contact;
  const contactState: InitialContactState = useSelector(selectIsOn);

  const { setPostData, isLoading, status } = contactState;
  const content = setPostData ? <ConfirmContainer /> : <FromContainer />;
  const completeUrl = '/contact/complete';

  useEffect(() => {
    if (status === ContactStatus.success) {
      dispatch(completeContact());
      router.push(completeUrl);
    }
  }, [dispatch, router, status]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {status === ContactStatus.failure && <div>送信失敗</div>}
      {content}
    </>
  );
};

export default CountContainer;
