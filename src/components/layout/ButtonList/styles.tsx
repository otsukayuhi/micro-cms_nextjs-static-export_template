import styled from '@emotion/styled';
import { Margin } from 'const/Styles';

export const ButtonListStyle = styled('ul')`
  display: flex;
  justify-content: flex-end;
  margin-top: ${Margin.M40};

  & > li:nth-of-type(n + 2) {
    margin-left: ${Margin.M16};
  }

  & a {
    text-decoration: none;
  }
`;
