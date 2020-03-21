/**
 * DOM層
 * - 宣言的UIを記述する
 * - データをPropsで受け取る
 * - 出し分け以外のロジックはContainer層で書く
 *   - props => ()とすることにより、余計なロジックが入らないようにする
 */

import * as React from 'react';
import { LayoutStyle } from 'components/commons/layout/styles';

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
    <p className="_text">Web Site / Design & Consulting</p>
  </div>
);

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => (
  <LayoutStyle title="Web Site / Design & Consulting">
    <div className={className}>
      <img src="/images/image.jpg" alt="" />
      <p className="_text">
        Webサイト制作や、サーバーの設定見直しなどなど、お気軽にご相談ください。
      </p>
    </div>
  </LayoutStyle>
);

export const MemberSection: React.FC<MemberSectionProps> = ({ className }) => (
  <LayoutStyle title="Member">
    <div className={className}>
      <div className="_header">
        <img className="_img" src="/images/yuhi_logo.png" alt="" />
        <p className="_text">フロントエンドウェブデベロッパー</p>
      </div>
      <section className="_body">
        <h3 className="_title">SKILL SET</h3>
        <ul className="_list">
          <dd className="_item">HTML</dd>
          <dd className="_item">CSS</dd>
          <dd className="_item">JavaScript</dd>
          <dd className="_item">AWS</dd>
        </ul>
      </section>
    </div>
  </LayoutStyle>
);
