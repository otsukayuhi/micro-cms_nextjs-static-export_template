/**
 * Container層
 * - スタイルコンポーネントにデータを渡す
 * - ロジックが必要な場合は、ここに記述する
 */

import React from 'react';
import { BaseLayoutStyle } from 'components/BaseLayout';
import {
  CoverStyle,
  AboutSectionStyle,
  MemberSectionStyle,
} from 'components/TopComponents';
// import { useTopPageData } from 'hooks/pages/usePageData';

// Container層
export const TopContainer: React.FC = () => {
  // const pageData = useTopPageData();
  // const { title, description } = pageData;

  return (
    <BaseLayoutStyle>
      <CoverStyle />
      <AboutSectionStyle />
      <MemberSectionStyle />
    </BaseLayoutStyle>
  );
};
