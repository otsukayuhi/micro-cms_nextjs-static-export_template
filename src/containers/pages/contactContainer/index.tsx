import React, { useState, useEffect } from 'react';
import { ContactStatus } from 'store/pages/contact/reducers';
import { useContactState } from 'hooks/store/useContact';
import { BaseStyleModules } from 'components/layout/Base';
import { SectionStyleModules } from 'components/layout/Section';
import { LoadingStyleModules } from 'components/commons/Loading/';
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
    <BaseStyleModules.BaseStyle>
      <SectionStyleModules.SectionStyle title="Contact" text={message}>
        {isLoading && <LoadingStyleModules.LoadingStyle />}
        {setPostData ? <ConfirmContainer /> : <FromContainer />}
      </SectionStyleModules.SectionStyle>
    </BaseStyleModules.BaseStyle>
  );
};

export default CountContainer;
