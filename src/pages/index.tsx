import React from 'react';
import Head from 'next/head';
import { NextPage, GetStaticProps } from 'next';
import TopContainer from 'containers/topContainer';
import { getData } from 'gateways/getData';
import { PageTypes } from 'types/data';

type PageProps = {
  data: PageTypes;
};

const Page: NextPage<PageProps> = ({ data }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData('page_data_top');

  return {
    props: { data },
  };
};

export default Page;
