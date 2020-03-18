/**
 * Container層
 * - スタイルコンポーネントにデータを渡す
 * - ロジックが必要な場合は、ここに記述する
 */

import React from 'react';
import Link from 'next/link';
import { useAboutPageData } from 'hooks/pages/usePageData';
import {
  HeadingStyle,
  LeadStyle,
  LinkListStyle,
} from 'components/pages/about/styles';

// Container層
const AboutContainer: React.FC = () => {
  const pageData = useAboutPageData();
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
