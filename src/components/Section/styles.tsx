import styled from '@emotion/styled';
import { margin } from 'const/styles';
import { Section } from './doms';

export const SectionStyle = styled(Section)`
  padding: ${margin.m56} ${margin.m24};

  > ._title {
    margin-bottom: ${margin.m32};
    line-height: 1.1;
  }

  > ._text {
    margin-bottom: ${margin.m24};
  }
`;
