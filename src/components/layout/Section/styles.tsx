import styled from '@emotion/styled';
import { Margin } from 'const/Styles';
import { Section } from './doms';

export const SectionStyle = styled(Section)`
  padding: ${Margin.M56} ${Margin.M24};

  > ._title {
    margin-bottom: ${Margin.M32};
    line-height: 1.1;
  }

  > ._text {
    margin-bottom: ${Margin.M24};
  }
`;
