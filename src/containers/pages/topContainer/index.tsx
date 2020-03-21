/**
 * Container層
 * - スタイルコンポーネントにデータを渡す
 * - ロジックが必要な場合は、ここに記述する
 */

import * as React from 'react';
import {
  CoverStyle,
  MemberSectionStyle,
  AboutSectionStyle,
} from 'components/pages/top/styles';
// import { useTopPageData } from 'hooks/pages/usePageData';

// Container層
const TopContainer: React.FC = () => {
  // const pageData = useTopPageData();
  // const { title, description } = pageData;

  return (
    <>
      <CoverStyle />
      <AboutSectionStyle />
      <MemberSectionStyle />
    </>
  );
};

export default TopContainer;
