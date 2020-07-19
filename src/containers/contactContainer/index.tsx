import React, { useState, useEffect } from 'react';
import { contactStatus } from 'store/contact/reducers';
import { useContactState } from 'hooks/useContact';
import { BaseLayoutStyle } from 'components/BaseLayout';
import { SectionStyle } from 'components/Section';
import { LoadingStyle } from 'components/Loading';
import { FormContainer } from './form';
import { ConfirmContainer } from './confirm';

export const CountContainer: React.FC = () => {
  const contactState = useContactState();
  const { setPostData, isLoading, status } = contactState;

  const [message, setMessage] = useState('お気軽にお問い合わせください。');

  useEffect(() => {
    if (status === contactStatus.success) {
      setMessage('以下の内容で送信しました。');
      return;
    }

    if (status === contactStatus.failure) {
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
      <SectionStyle title="Contact" text={message}>
        {isLoading && <LoadingStyle />}
        {setPostData ? <ConfirmContainer /> : <FormContainer />}
      </SectionStyle>
    </BaseLayoutStyle>
  );
};
