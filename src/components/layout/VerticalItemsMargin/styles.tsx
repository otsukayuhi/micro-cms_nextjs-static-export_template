import styled from '@emotion/styled';
import { Margin } from 'const/Styles';

export const VerticalItemsMarginStyle = styled('div')`
  & > *:nth-of-type(n + 2) {
    margin-top: ${Margin.M32};
  }
`;
