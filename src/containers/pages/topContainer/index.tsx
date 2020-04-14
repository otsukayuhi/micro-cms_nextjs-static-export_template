/**
 * Container層
 * - スタイルコンポーネントにデータを渡す
 * - ロジックが必要な場合は、ここに記述する
 */

import React from 'react';
import { BaseStyle } from 'components/layout/Base/styles';
import { TopStyleModules } from 'components/pages/Top';
// import { useTopPageData } from 'hooks/pages/usePageData';

// Container層
const TopContainer: React.FC = () => {
  // const pageData = useTopPageData();
  // const { title, description } = pageData;

  return (
    <BaseStyle>
      <TopStyleModules.CoverStyle />
      <TopStyleModules.AboutSectionStyle />
      <TopStyleModules.MemberSectionStyle />
    </BaseStyle>
  );
};

export default TopContainer;
