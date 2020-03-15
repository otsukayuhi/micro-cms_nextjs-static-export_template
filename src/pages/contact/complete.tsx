import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Page: NextPage = () => {
  const router = useRouter();
  const contactState = useSelector(state => state.contact);

  const { isComplete } = contactState;

  useEffect(() => {
    if (!isComplete) router.push('/');
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
