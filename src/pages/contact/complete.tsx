import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { InitialContactState } from 'store/pages/contact/types';
import HeadComponent, { HeadComponentProps } from 'components/atoms/head/dom';

const pageData: HeadComponentProps = {
  title: 'お問い合わせ | 完了',
  description: 'お問い合わせ完了ページ',
};

const Page: NextPage = () => {
  const router = useRouter();
  const selectIsOn = (state: RootState) => state.contact;
  const contactState: InitialContactState = useSelector(selectIsOn);

  const { isComplete } = contactState;
  const rootUrl = '/';

  const { title, description } = pageData;

  useEffect(() => {
    if (!isComplete) router.push(rootUrl);
  }, [router, isComplete]);

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
