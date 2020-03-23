import React, { useState, useEffect } from 'react';
import { ContactStatus } from 'store/pages/contact/reducers';
import { useContactState } from 'hooks/store/useContact';
import { BaseLayoutStyle } from 'components/commons/layout/base/styles';
import { SectionLayoutStyle } from 'components/commons/layout/section/styles';
import { LoadingStyle } from 'components/commons/loading/styles';
import FromContainer from './form';
import ConfirmContainer from './confirm';

const CountContainer: React.FC = () => {
  // const { ContactClear } = useContactActions();
  const contactState = useContactState();
  const { setPostData, isLoading, status } = contactState;

  const [message, setMessage] = useState('お気軽にお問い合わせください。');

  useEffect(() => {
    if (status === ContactStatus.success) {
      setMessage('以下の内容で送信しました。');
      return;
    }

    if (status === ContactStatus.failure) {
      setMessage(
        '送信失敗しました。お手数ですが、時間を開けて再度ご送をお願いいたします。',
      );
      return;
    }

    if (setPostData) {
      setMessage('送信内容にお間違いはございませんか？');
      return;
    }

    if (!setPostData) {
      setMessage('お気軽にお問い合わせください。');
      return;
    }

    // statusとsetPostDataを検知
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, setPostData]);

  return (
    <BaseLayoutStyle>
      <SectionLayoutStyle title="Contact" text={message}>
        {isLoading && <LoadingStyle />}
        {setPostData ? <ConfirmContainer /> : <FromContainer />}
      </SectionLayoutStyle>
    </BaseLayoutStyle>
  );
};

export default CountContainer;
