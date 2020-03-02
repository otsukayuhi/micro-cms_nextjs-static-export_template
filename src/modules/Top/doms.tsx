/**
 * DOM層
 * - 宣言的UIを記述する
 * - データをPropsで受け取る
 * - 出し分け以外のロジックはContainer層で書く
 *   - props => ()とすることにより、余計なロジックが入らないようにする
 */

import React from 'react';

export type HeadingProps = {
  className?: string;
  text: string;
};

export type LeadProps = {
  className?: string;
  text: string;
};

export const Heading: React.FC<HeadingProps> = ({ className, text }) => (
  <h1 className={className}>{text}</h1>
);

export const Lead: React.FC<LeadProps> = ({ className, text }) => (
  <>
    <p className={className}>{text}</p>
    <img src="/images/logo.svg" alt="" width="100" />
  </>
);
