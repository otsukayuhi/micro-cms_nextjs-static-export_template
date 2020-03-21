import React, { createContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import TopContainer from 'containers/pages/topContainer';
import { getPageData } from 'gateways/getPageData';
import HeadComponent, { HeadComponentProps } from 'components/commons/head/dom';

type TopPageDataContextProps = HeadComponentProps;

type TopPageProps = {
  pageData: HeadComponentProps;
};

export const TopPageDataContext = createContext<TopPageDataContextProps>(
  null as any,
);

const Page: NextPage<TopPageProps> = ({ pageData }) => {
  const { title, description } = pageData;

  return (
    <>
      <HeadComponent title={title} description={description} />
      <TopPageDataContext.Provider value={pageData}>
        <TopContainer />
      </TopPageDataContext.Provider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData('page_data_top');

  return {
    props: { pageData },
  };
};

export default Page;
