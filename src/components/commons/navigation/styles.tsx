import styled from '@emotion/styled';
import { Navigation } from './doms';
import { Color, Margin } from 'const/Styles';

export const NavigationStyle = styled(Navigation)`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Margin.M8} ${Margin.M8} ${Margin.M8} ${Margin.M16};
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
        color: ${Color.black};
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
`;
