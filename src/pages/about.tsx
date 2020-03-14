import React from 'react';
import Head from 'next/head';
import { NextPage, GetStaticProps } from 'next';
import AboutContainer from 'containers/aboutContainer';
import { getData } from 'gateways/getData';
import { PageTypes, LinkTypes } from 'types/data';

type LinksProps = {
  links: LinkTypes[];
};

type PageProps = {
  data: PageTypes & LinksProps;
};

const Page: NextPage<PageProps> = ({ data }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData('page_data_about');

  return {
    props: { data },
  };
};

export default Page;
