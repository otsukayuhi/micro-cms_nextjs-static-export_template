/**
 * Container層
 * - スタイルコンポーネントにデータを渡す
 * - ロジックが必要な場合は、ここに記述する
 */

import React from 'react';
import Link from 'next/link';
import { PageTypes, LinkTypes } from 'types/data';
import {
  HeadingStyle,
  LeadStyle,
  LinkListStyle,
} from 'components/about/styles';

export type AboutContainerProps = {
  links: LinkTypes[];
} & PageTypes;

// Container層
const AboutContainer: React.FC<AboutContainerProps> = ({
  title,
  description,
  links,
}) => {
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
