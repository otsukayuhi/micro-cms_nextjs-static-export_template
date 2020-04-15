import styled from '@emotion/styled';
import { margin } from 'const/styles';

export const VerticalItemsMarginStyle = styled('div')`
  & > *:nth-of-type(n + 2) {
    margin-top: ${margin.m32};
  }
`;
