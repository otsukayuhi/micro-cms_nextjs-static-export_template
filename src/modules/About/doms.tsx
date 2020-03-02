/**
 * DOM層
 * - 宣言的UIを記述する
 * - データをPropsで受け取る
 * - 出し分け以外のロジックはContainer層で書く
 *   - props => ()とすることにより、余計なロジックが入らないようにする
 */

import React from 'react';
import { LinkTypes } from 'types/data';

export type HeadingProps = {
  className?: string;
  text: string;
};

export type LeadProps = {
  className?: string;
  text: string;
};

export type LinkListProps = {
  className?: string;
  linkList: LinkTypes[];
};

export const Heading: React.FC<HeadingProps> = ({ className, text }) => (
  <h1 className={className}>{text}</h1>
);

export const Lead: React.FC<LeadProps> = ({ className, text }) => (
  <>
    <p className={className}>{text}</p>
    <img src="/images/maru.svg" alt="" width="100" />
  </>
);

export const LinkList: React.FC<LinkListProps> = ({ className, linkList }) => (
  <ul className={className}>
    {linkList.map((item, index) => (
      <li key={index}>
        <a href={item.url} target="_blank" rel=" noopener noreferrer">
          {item.linkName}
        </a>
      </li>
    ))}
  </ul>
);
