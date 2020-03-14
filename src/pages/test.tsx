import React from 'react';
import { GetStaticProps } from 'next';
import { getData } from 'gateways/getData';

const Home = ({ data }) => {
  console.log(data);

  return <div>hoge</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData('page_data_top');

  return {
    props: {
      data,
    },
  };
};

export default Home;
