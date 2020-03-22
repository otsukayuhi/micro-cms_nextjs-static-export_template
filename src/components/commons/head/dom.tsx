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
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </Head>
);

export default HeadComponent;
