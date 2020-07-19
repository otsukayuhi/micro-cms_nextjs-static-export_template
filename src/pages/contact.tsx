import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { HeadComponent } from 'components/Head';
import { CountContainer } from 'containers/contactContainer';
import { getAPI } from 'gateways/getAPI';

type ContactPageProps = {
  pageData: Pick<
    React.ComponentProps<typeof HeadComponent>,
    'title' | 'description'
  >;
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
      <CountContainer />
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
