import styled from '@emotion/styled';
import { Navigation } from './doms';
import { color, margin } from 'const/styles';

export const NavigationStyle = styled(Navigation)`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${margin.m8} ${margin.m8} ${margin.m8} ${margin.m16};
  width: 100%;
  height: 48px;

  > ._logo {
    display: block;
    width: 80px;
  }

  > ._list {
    > ._item {
      > a {
        position: relative;
        font-weight: bold;
        color: ${color.black};
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
`;
