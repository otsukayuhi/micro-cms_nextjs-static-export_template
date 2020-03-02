import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import AboutContainer from 'modules/About/container';
import data from '../../data/page_data_about.json';

const Page: NextPage = () => {
  const { title, description, links } = data;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <AboutContainer {...{ title, description, links }} />
    </>
  );
};

export default Page;
