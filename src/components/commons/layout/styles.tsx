import styled from '@emotion/styled';
import { Margin } from 'const/Styles';
import { Layout } from './doms';

export const LayoutStyle = styled(Layout)`
  padding: ${Margin.M32} ${Margin.M40};

  > ._title {
    margin-bottom: ${Margin.M32};
    font-size: 4rem;
    line-height: 1.1;
  }
`;
