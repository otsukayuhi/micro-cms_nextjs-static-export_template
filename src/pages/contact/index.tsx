import React from 'react';
import { NextPage } from 'next';
import HeadComponent, { HeadComponentProps } from 'components/atoms/head/dom';
import ContactContainer from 'containers/pages/contactContainer';

const pageData: HeadComponentProps = {
  title: 'お問い合わせ',
  description: 'お問い合わせページ',
};

const Page: NextPage = () => {
  const { title, description } = pageData;

  return (
    <>
      <HeadComponent title={title} description={description} />
      <ContactContainer />
    </>
  );
};

export default Page;
