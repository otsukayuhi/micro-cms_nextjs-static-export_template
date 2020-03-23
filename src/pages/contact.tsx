import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import HeadComponent, { HeadComponentProps } from 'components/commons/head/dom';
import ContactContainer from 'containers/pages/contactContainer';
import { getAPI } from 'gateways/getAPI';

type ContactPageProps = {
  pageData: HeadComponentProps;
  pathname: string;
};

const Page: NextPage<ContactPageProps> = ({ pageData, pathname }) => {
  const { title, description } = pageData;

  return (
    <>
      <HeadComponent
        title={title}
        description={description}
        pathname={pathname}
      />
      <ContactContainer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getAPI('page_data_contact');

  return {
    props: { pageData },
  };
};

export default Page;
