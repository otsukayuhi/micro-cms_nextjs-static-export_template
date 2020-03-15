/**
 * Container層
 * - スタイルコンポーネントにデータを渡す
 * - ロジックが必要な場合は、ここに記述する
 */

import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { PageTypes, LinkTypes } from 'types/data';
import {
  HeadingStyle,
  LeadStyle,
  LinkListStyle,
} from 'components/about/styles';

export type TopContainerProps = {
  links: LinkTypes[];
} & PageTypes;

// Container層
const TopContainer: React.FC<TopContainerProps> = ({
  title,
  description,
  links,
}) => {
  const name = useSelector(state => state.contact.name);
  return (
    <>
      <HeadingStyle text={title} />
      {name && (
        <p>
          こんにちは、<strong>{name}</strong>さん
        </p>
      )}
      <LeadStyle text={description} />
      <Link href="/">
        <a>Top</a>
      </Link>
      <LinkListStyle linkList={links} />
    </>
  );
};

export default TopContainer;
