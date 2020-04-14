import React, { createContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import TopContainer from 'containers/pages/topContainer';
import { HeadDomModules } from 'components/commons/Head';
import { getAPI } from 'gateways/getAPI';

type TopPageDataContextProps = HeadDomModules.HeadComponentProps;

type TopPageProps = {
  pageData: HeadDomModules.HeadComponentProps;
  pathname: string;
};

export const TopPageDataContext = createContext<TopPageDataContextProps>(
  null as any,
);

const Page: NextPage<TopPageProps> = ({ pageData, pathname }) => {
  const { title, description } = pageData;

  return (
    <>
      <HeadDomModules.HeadComponent
        title={title}
        description={description}
        pathname={pathname}
      />
      <TopPageDataContext.Provider value={pageData}>
        <TopContainer />
      </TopPageDataContext.Provider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getAPI('page_data_top');

  return {
    props: { pageData },
  };
};

export default Page;
