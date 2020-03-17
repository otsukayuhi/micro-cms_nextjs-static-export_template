import React from 'react';
import Head from 'next/head';

export type HeadComponentProps = {
  title: string;
  description: string;
};

const HeadComponent: React.FC<HeadComponentProps> = ({
  title,
  description,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default HeadComponent;
