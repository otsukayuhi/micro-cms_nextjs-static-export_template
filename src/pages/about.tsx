import React, { createContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import HeadComponent, { HeadComponentProps } from 'components/head/dom';
import AboutContainer from 'containers/aboutContainer';
import { LinkTypes } from 'components/about/doms';
import { getData } from 'gateways/getData';

type AboutPageDataContextProps = {
  links: LinkTypes[];
} & HeadComponentProps;

type AboutPageProps = {
  pageData: AboutPageDataContextProps;
};

export const AboutPageDataContext = createContext<AboutPageDataContextProps>(
  null as any,
);

const Page: NextPage<AboutPageProps> = ({ pageData }) => {
  const { title, description } = pageData;

  return (
    <>
      <HeadComponent title={title} description={description} />
      <AboutPageDataContext.Provider value={pageData}>
        <AboutContainer />
      </AboutPageDataContext.Provider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getData('page_data_about');

  return {
    props: { pageData },
  };
};

export default Page;
