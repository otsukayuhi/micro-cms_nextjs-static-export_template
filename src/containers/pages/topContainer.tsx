/**
 * Container層
 * - スタイルコンポーネントにデータを渡す
 * - ロジックが必要な場合は、ここに記述する
 */

import React, { useContext } from 'react';
import Link from 'next/link';
import { TopPageDataContext } from 'pages';
import { HeadingStyle, LeadStyle } from 'components/pages/top/styles';

// Container層
const TopContainer: React.FC = () => {
  const pageData = useContext(TopPageDataContext);
  const { title, description } = pageData;

  return (
    <>
      <HeadingStyle text={title} />
      <LeadStyle text={description} />
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/contact">
        <a>お問い合わせ</a>
      </Link>
    </>
  );
};

export default TopContainer;
