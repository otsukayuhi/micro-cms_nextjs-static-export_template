/**
 * Container層
 * - スタイルコンポーネントにデータを渡す
 * - ロジックが必要な場合は、ここに記述する
 */

import React, { useContext } from 'react';
import Link from 'next/link';
import {
  HeadingStyle,
  LeadStyle,
  LinkListStyle,
} from 'components/pages/about/styles';
import { AboutPageDataContext } from 'pages/about';

// Container層
const AboutContainer: React.FC = () => {
  const pageData = useContext(AboutPageDataContext);
  const { title, description, links } = pageData;
  return (
    <>
      <HeadingStyle text={title} />
      <LeadStyle text={description} />
      <Link href="/">
        <a>Top</a>
      </Link>
      <LinkListStyle linkList={links} />
    </>
  );
};

export default AboutContainer;
