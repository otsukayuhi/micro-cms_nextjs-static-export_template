/**
 * DOM層
 * - 宣言的UIを記述する
 * - データをPropsで受け取る
 * - 出し分け以外のロジックはContainer層で書く
 *   - props => ()とすることにより、余計なロジックが入らないようにする
 */

import React from 'react';
import { SectionLayoutStyle } from 'components/commons/layout/section/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

export type CoverProps = {
  className?: string;
};

export type AboutSectionProps = {
  className?: string;
};

export type MemberSectionProps = {
  className?: string;
};

export const Cover: React.FC<CoverProps> = ({ className }) => (
  <div className={className}>
    <h1 className="_logo">
      <img src="/images/maru.svg" alt="フタエドットアップ" />
    </h1>
    <Typography className="_text" variant="body1">
      Web Site / Design & Consulting
    </Typography>
  </div>
);

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => (
  <SectionLayoutStyle title="Web Site / Design & Consulting">
    <div className={className}>
      <img src="/images/image.jpg" alt="" />
      <Typography className="_text" variant="body1">
        Webサイト制作や、サーバーの設定見直しなどなど、お気軽にご相談ください。
      </Typography>
    </div>
  </SectionLayoutStyle>
);

export const MemberSection: React.FC<MemberSectionProps> = ({ className }) => (
  <SectionLayoutStyle title="Member">
    <div className={className}>
      <div className="_header">
        <img className="_img" src="/images/yuhi_logo.png" alt="" />
        <Typography className="_text" variant="body1">
          フロントエンドウェブデベロッパー
        </Typography>
      </div>
      <section className="_body">
        <Typography variant="h3" gutterBottom>
          SKILL SET
        </Typography>
        <ul className="_list">
          <Chip label="HTML" variant="outlined" />
          <Chip label="CSS" variant="outlined" />
          <Chip label="JavaScript" variant="outlined" />
          <Chip label="TypeScript" variant="outlined" />
          <Chip label="React" variant="outlined" />
          <Chip label="jQuery" variant="outlined" />
          <Chip label="SCSS" variant="outlined" />
          <Chip label="FLOCSS" variant="outlined" />
          <Chip label="BEM" variant="outlined" />
          <Chip label="AWS" variant="outlined" />
        </ul>
      </section>
    </div>
  </SectionLayoutStyle>
);
