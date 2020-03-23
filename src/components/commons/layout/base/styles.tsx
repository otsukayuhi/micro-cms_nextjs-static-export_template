import styled from '@emotion/styled';
import { BaseLayout } from './doms';

export const BaseLayoutStyle = styled(BaseLayout)`
  display: flex;
  flex-flow: column;
  margin: auto;
  max-width: 900px;
  min-height: 100vh;

  > ._contents {
    flex: 1;
  }
`;
