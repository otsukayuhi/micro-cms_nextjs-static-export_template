import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { HeadDomModules } from 'components/commons/Head';
import ContactContainer from 'containers/pages/contactContainer';
import { getAPI } from 'gateways/getAPI';

type ContactPageProps = {
  pageData: HeadDomModules.HeadComponentProps;
  pathname: string;
};

const Page: NextPage<ContactPageProps> = ({ pageData, pathname }) => {
  const { title, description } = pageData;

  return (
    <>
      <HeadDomModules.HeadComponent
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
