import React from 'react';
import { NavigationStyle } from 'components/commons/navigation/styles';
import { FooterStyle } from 'components/commons/footer/styles';

export type BaseLayoutProps = {
  className?: string;
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  className,
  children,
}) => (
  <div className={className}>
    <NavigationStyle />
    <div className="_contents">{children}</div>
    <FooterStyle />
  </div>
);
