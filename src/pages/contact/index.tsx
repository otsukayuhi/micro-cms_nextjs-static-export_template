import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import ContactContainer from 'containers/contactContainer';

const pageData = {
  title: 'お問い合わせ',
  description: 'お問い合わせページ',
};

const Page: NextPage = () => {
  const { title, description } = pageData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <ContactContainer />
    </>
  );
};

export default Page;
