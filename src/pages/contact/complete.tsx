import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { InitialContactState } from 'store/contact/types';

const Page: NextPage = () => {
  const router = useRouter();
  const selectIsOn = (state: RootState) => state.contact;
  const contactState: InitialContactState = useSelector(selectIsOn);

  const { isComplete } = contactState;
  const rootUrl = '/';

  useEffect(() => {
    if (!isComplete) router.push(rootUrl);
  }, [router, isComplete]);

  return (
    <>
      <Head>
        <title>お問い合わせ | 完了</title>
        <meta name="description" content="お問い合わせ | 完了" />
      </Head>
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
