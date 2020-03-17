/**
 * Style層
 * - CSSを記述する
 * - styledの引数でコンポーネントを受け取る
 * - CSSのネストが深くなったらコンポーネント分割を検討する
 */

import styled from '@emotion/styled';
import { Heading, Lead, LinkList } from './doms';

export const HeadingStyle = styled(Heading)``;

export const LeadStyle = styled(Lead)``;

export const LinkListStyle = styled(LinkList)``;
