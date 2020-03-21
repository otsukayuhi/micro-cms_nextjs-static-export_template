import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Navigation } from './doms';
import { Color, Margin } from 'const/Styles';

const arrowBorderSize = '3px';
const arrowSize = '10px';

const arrowStyle = css`
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -17px;
  display: block;
  margin: auto;
  width: ${arrowSize};
  height: ${arrowSize};
  border-top: solid ${arrowBorderSize} ${Color.black};
  border-right: solid ${arrowBorderSize} ${Color.black};
  transform: rotate(45deg);
`;

export const NavigationStyle = styled(Navigation)`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Margin.M8} ${Margin.M16};
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
        font-size: 2rem;
        &::before {
          ${arrowStyle}
        }
      }
    }
  }
`;
