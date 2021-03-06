import React, { createContext, ComponentProps } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { TopContainer } from 'containers/topContainer';
import { HeadComponent } from 'components/Head';
import { getAPI } from 'gateways/getAPI';

type TopPageDataContextProps = Pick<
  ComponentProps<typeof HeadComponent>,
  'description' | 'title'
>;

type TopPageProps = {
  pageData: TopPageDataContextProps;
  pathname: string;
};

export const TopPageDataContext = createContext<TopPageDataContextProps>(
  null as any,
);

const Page: NextPage<TopPageProps> = ({ pageData, pathname }) => {
  const { title, description } = pageData;

  return (
    <>
      <HeadComponent
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
