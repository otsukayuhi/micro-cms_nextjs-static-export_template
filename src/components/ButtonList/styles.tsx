import styled from '@emotion/styled';
import { margin } from 'const/styles';

export const ButtonListStyle = styled('ul')`
  display: flex;
  justify-content: flex-end;
  margin-top: ${margin.m40};

  & > li:nth-of-type(n + 2) {
    margin-left: ${margin.m16};
  }

  & a {
    text-decoration: none;
  }
`;
