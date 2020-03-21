import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HeadComponent, { HeadComponentProps } from 'components/commons/head/dom';
import { useContactState } from 'hooks/store/useContact';

const pageData: HeadComponentProps = {
  title: 'お問い合わせ | 完了',
  description: 'お問い合わせ完了ページ',
};

const Page: NextPage = () => {
  const router = useRouter();
  const contactState = useContactState();
  const { isComplete } = contactState;
  const rootUrl = '/';

  const { title, description } = pageData;

  useEffect(() => {
    if (!isComplete) router.push(rootUrl);
    // isCompleteのみを検知
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  return (
    <>
      <HeadComponent title={title} description={description} />
      {isComplete && (
        <div>
          <p>お問い合わせありがとうございました。</p>
          <Link href="/">
            <a>トップへもどる</a>
          </Link>
        </div>
      )}
    </>
  );
};

export default Page;
