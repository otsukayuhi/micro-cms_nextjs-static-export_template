import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import TopContainer from 'containers/topContainer';
import data from '../../data/page_data_top.json';

const Page: NextPage = () => {
  const { title, description } = data;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <TopContainer {...{ title, description }} />
    </>
  );
};

export default Page;
