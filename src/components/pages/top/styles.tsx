/**
 * Style層
 * - CSSを記述する
 * - styledの引数でコンポーネントを受け取る
 * - CSSのネストが深くなったらコンポーネント分割を検討する
 */

import styled from '@emotion/styled';
import { Cover, MemberSection, AboutSection } from './doms';
import { Margin, headerHeight } from 'const/Styles';

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
    margin-top: ${Margin.M16};
  }
`;

export const AboutSectionStyle = styled(AboutSection)`
  > ._text {
    margin-top: ${Margin.M24};
  }
`;

export const MemberSectionStyle = styled(MemberSection)`
  > ._header {
    > ._img {
      margin: auto;
      width: 256px;
    }

    > ._text {
      margin-top: ${Margin.M16};
      text-align: center;
    }
  }

  > ._body {
    margin-top: ${Margin.M16};
    > ._title {
      font-size: 2.4rem;
    }

    > ._list {
      margin-top: ${Margin.M8};
      > ._item:nth-of-type(n + 2) {
        margin-top: ${Margin.M4};
      }
    }
  }
`;
