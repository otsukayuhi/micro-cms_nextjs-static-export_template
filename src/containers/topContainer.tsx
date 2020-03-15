/**
 * Container層
 * - スタイルコンポーネントにデータを渡す
 * - ロジックが必要な場合は、ここに記述する
 */

import React from 'react';
import Link from 'next/link';
import { PageTypes } from 'types/data';
import { HeadingStyle, LeadStyle } from 'components/top/styles';

export type TopContainerProps = PageTypes;

// Container層
const TopContainer: React.FC<TopContainerProps> = ({ title, description }) => {
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
