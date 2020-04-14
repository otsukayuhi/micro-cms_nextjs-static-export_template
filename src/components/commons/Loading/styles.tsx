import styled from '@emotion/styled';
import { Loading } from './dom';
import { Color } from 'const/Styles';

export const LoadingStyle = styled(Loading)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${Color.white};
  font-size: 30px;
  font-weight: bold;
  z-index: 1;
`;
