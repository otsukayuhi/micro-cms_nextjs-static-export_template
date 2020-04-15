/**
 * Style層
 * - CSSを記述する
 * - styledの引数でコンポーネントを受け取る
 * - CSSのネストが深くなったらコンポーネント分割を検討する
 */

import styled from '@emotion/styled';
import { Cover, MemberSection, AboutSection } from './doms';
import { margin, headerHeight } from 'const/styles';

export const CoverStyle = styled(Cover)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${headerHeight * 2.5}px; /* 結構フィーリングの数値 */
  min-height: calc(100vh - ${headerHeight}px);

  > ._logo {
    width: 50%;
  }

  > ._text {
    margin-top: ${margin.m16};
  }
`;

export const AboutSectionStyle = styled(AboutSection)`
  > ._text {
    margin-top: ${margin.m24};
  }
`;

export const MemberSectionStyle = styled(MemberSection)`
  > ._header {
    > ._img {
      margin: auto;
      width: 256px;
    }

    > ._text {
      margin-top: ${margin.m16};
      text-align: center;
    }
  }

  > ._body {
    margin-top: ${margin.m40};
    > ._list {
      margin: 0 -${margin.m4} -${margin.m4};
      > * {
        margin: ${margin.m4};
      }
    }
  }
`;
